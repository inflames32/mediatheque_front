import { useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

import "../../Styles/albumDetails.scss";

function AlbumDetails() {
  const fakesAlbums = [
    {
      id: 1,
      name: "Des Deux L'Une Est L'Autre",
      artist: "Hypno5e",
      profil: "https://f4.bcbits.com/img/a1495479835_10.jpg",
      gencode: 35018541315441,
      year: 2007,
      format: "CD",
      style: "Métal",
    },
    {
      id: 2,
      name: "Acid Mist Tomorrow",
      artist: "Hypno5e",
      profil: "https://f4.bcbits.com/img/a3539147117_10.jpg",
      gencode: 35018541315441,
      year: 2012,
      format: "CD",
      style: "Métal",
    },
    {
      id: 3,
      name: "Alba - Les Ombres Errantes",
      artist: "Hypno5e",
      profil: "https://f4.bcbits.com/img/a2278601926_10.jpg",
      gencode: 35018541315441,
      year: 2018,
      format: "CD",
      style: "Métal",
    },
    {
      id: 4,
      name: "Shores Of The Abstract Line",
      artist: "Hypno5e",
      profil: "https://f4.bcbits.com/img/a2431544685_10.jpg",
      gencode: 35018541315441,
      year: 2016,
      format: "CD",
      style: "Métal",
    },
    {
      id: 5,
      name: "A Distant (Dark) Source",
      artist: "Hypno5e",
      profil: "https://f4.bcbits.com/img/a1798152147_10.jpg",
      gencode: 35018541315441,
      year: "2019",
      format: "CD",
      style: "Métal",
    },
  ];

  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [AddNewAlbum, setAddNewAlbum] = useState(fakesAlbums);
  //const [nbrAlbum, setNbrAlbum] = useState([0]);
  const [nbrAlbum, setNbrAlbum] = useState([0]);

  useEffect(() => {}, []);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <body>
        <div className="btn-add-new-album">
          <Button
            onClick={openModal}
            className={
              ModalIsOpen
                ? "button btn-new-album is-disabled"
                : "button is-success"
            }
            variant="success"
          >
            Ajouter un nouvel album
          </Button>
        </div>

        <div>nombre d'albums {nbrAlbum}</div>
        <div className="album">
          {fakesAlbums.length > 0 &&
            fakesAlbums.map((fakeAlbum) => (
              <Card className="element" key={fakeAlbum.id}>
                <Image
                  className="element-img"
                  variant="top"
                  src={fakeAlbum.profil}
                />
                <ul className="list-group-flush">
                  <li>Artiste: {fakeAlbum.artist}</li>
                  <li>Album: {fakeAlbum.name}</li>
                  <li>Format: {fakeAlbum.format}</li>
                  <li>gencode: {fakeAlbum.gencode}</li>
                  <li>Année de sortie: {fakeAlbum.year}</li>
                  <li>Style: {fakeAlbum.style}</li>
                </ul>
              </Card>
            ))}
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default AlbumDetails;
