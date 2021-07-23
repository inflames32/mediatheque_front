import { useState, useEffect } from "react";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";

import { Button, Card } from "react-bootstrap";
import { BsTrash, BsPencil } from "react-icons/bs";

import "../../Styles/album_details.scss";

const AlbumDetails = ({
	closeModalAlbumDetail,
	setIncrement,
	increment,
	albumId,
}) => {
	const [key, setKey] = useState(0);
	const { deleteAlbumByID, getOneAlbum, album } = AlbumsMiddleware();

	useEffect(() => {
		getOneAlbum(albumId);
	}, [key]); // eslint-disable-line react-hooks/exhaustive-deps

	const deleteAlbum = (albumId) => () => {
		deleteAlbumByID(albumId);
		setIncrement(key + 1);
	};

	const closeAlbumDetails = () => {
		closeModalAlbumDetail();
	};

	const handleUpdateAlbumDetails = () => {
		console.log("je modifierais les infos de l'album");
	};

	const ImgNotDefined =
		"https://image.flaticon.com/icons/png/128/376/376819.png";

	return (
		<div className='modal-albumDetails' onClick={closeAlbumDetails}>
			<Card
				className='modal-content-albumDetails'
				onClick={(e) => e.stopPropagation()}>
				<Card.Img />
				<Card.Body>
					<span className='btn-close' onClick={closeAlbumDetails}></span>

					<Card.Text>
						<span>
							{album.cover ? (
								<span className='modal-content-albumDetails-cover'>
									<Card.Img src={album.cover} />
								</span>
							) : (
								<span className='modal-content-albumDetails-cover'>
									<Card.Img src={ImgNotDefined} />
								</span>
							)}
							{/* <div>album id : {album._id}</div> */}
							{/* TODO: ajouter une class pour les display block */}
							<span style={{ display: "block" }}>
								Nom de l'album : {album.name}
							</span>
							<span style={{ display: "block" }}>
								Nom de l'artiste : {album.artist}
							</span>
							<span style={{ display: "block" }}>Style : {album.style}</span>
							<span style={{ display: "block" }}>Année : {album.year}</span>
						</span>
						<span style={{ display: "block" }}>
							<BsPencil
								className='pencil-icon'
								onClick={handleUpdateAlbumDetails}
							/>
						</span>
						<br /> <br />
						<br />
					</Card.Text>
					<Button
						onClick={closeAlbumDetails}
						className='albumDetails-btn-close'
						variant='primary'>
						OK
					</Button>
					<span>
						<BsTrash className='trash-icon' onClick={deleteAlbum(albumId)} />
					</span>
				</Card.Body>
			</Card>
		</div>
	);
};

export default AlbumDetails;
