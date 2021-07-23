import { useState, useEffect } from "react";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";
import { Form, Button, Card } from "react-bootstrap";

import "../../Styles/add_new_album.scss";

const AddNewAlbum = ({
	closeModal,
	ModalIsOpen,
	setAddNewAlbum,
	fakesAlbums,
	setModalIsOpen,
	setNbrAlbum,
	nbrAlbum,
}) => {
	//state de contrôle des données entrées par l'utilisateur
	const [userInputValue, setUserInputValue] = useState({
		name: "",
		artist: "",
		cover: "",
		gencode: "",
		year: "",
		format: "",
		style: "",
	});

	const { postAlbum } = AlbumsMiddleware();

	const handleInputChange = (evt) => {
		const { name, value } = evt.target;
		setUserInputValue({
			...userInputValue,
			[name]: value,
		});
	};

	const onFormSubmit = async (evt) => {
		evt.preventDefault();
		await postAlbum({
			name: userInputValue.name,
			artist: userInputValue.artist,
			cover: userInputValue.cover,
			gencode: userInputValue.gencode,
			year: userInputValue.year,
			format: userInputValue.format,
			style: userInputValue.style,
		});
		// collection user
		// const { albumPossédé } = await tacollection.getOne({ _id: iduser })
		// getOneAlbum(id)
		// {
		//  id: 'sonid'
		//  name: 'toto',
		//  albumPossédé : [
		//    'idalbum1', 'idalbum2'
		//  ]
		// }
		closeModal();
	};
	return (
		<div className='modal-form-add-album'>
			<Card className='modal-content-albumDetails'>
				<Form className='form-add-album' onSubmit={onFormSubmit}>
					<Form.Group className='mb-3' controlId='formBasicAlbum'>
						<Form.Label className='label-input'>Nom de l'album</Form.Label>
						<Form.Control
							type='text'
							placeholder="Nom de l'album"
							name='name'
							value={userInputValue.name}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicArtist'>
						<Form.Label className='label-input'>Nom de l'artiste</Form.Label>
						<Form.Control
							type='text'
							placeholder="Nom de l'artiste"
							name='artist'
							value={userInputValue.artist}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicCover'>
						<Form.Label className='label-input'>
							Jaquette de l'album (URL de l'image)
						</Form.Label>
						<Form.Control
							type='text'
							placeholder="Jaquette de l'album"
							name='cover'
							value={userInputValue.cover}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicGencode'>
						<Form.Label className='label-input'>
							Code barre (si existant)
						</Form.Label>
						<Form.Control
							type='number'
							placeholder='Code barre'
							name='gencode'
							value={userInputValue.gencode}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicYear'>
						<Form.Label className='label-input'>Année de sortie</Form.Label>
						<Form.Control
							type='number'
							placeholder="Année de sortie de l'album"
							name='year'
							value={userInputValue.year}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicFormat'>
						<Form.Label className='label-input'>
							Format (CD, vinyle, K7...)
						</Form.Label>
						<Form.Control
							type='text'
							placeholder="Format de l'album"
							name='format'
							value={userInputValue.format}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicStyle'>
						<Form.Label className='label-input'>
							Style (rock, métal, classique, jazz...)
						</Form.Label>
						<Form.Control
							type='text'
							placeholder="Style de l'album"
							name='style'
							value={userInputValue.style}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<div className='btn-action'>
						<Button
							type='primary'
							className='button is-success'
							onClick={onFormSubmit}>
							Enregistrer
						</Button>
						<Button
							type='danger'
							onClick={closeModal}
							variant='danger'
							className='button is-cancel'>
							Annuler
						</Button>
					</div>
				</Form>
			</Card>
		</div>
	);
};

export default AddNewAlbum;
