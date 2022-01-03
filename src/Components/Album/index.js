import { useEffect } from "react";

import { BsPencil, BsTrash, BsInfoCircle } from "react-icons/bs";

import { connect } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import { getAlbumByID, deleteAlbumByID, openUpdate } from "../../store/action";

const Album = ({
  albumId,
  album,
  cover,
  getAlbumByID,
  deleteAlbumByID,
  loggedUser,
}) => {
  useEffect((albumId) => {
    getAlbumByID(albumId);
  }, []);

  const deleteAlbum = (albumId) => () => {
    deleteAlbumByID(albumId);
  };

  /* const handleUpdateAlbum = () => {
    //openUpdate();
  }; */

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/128/376/376819.png";

  return (
    <div className="album box-border">
      <Header />
      <div className="pt-16 flex justify-center lg:h-4/5 lg:w-full items-center m-auto">
        <div className="h-full flex sm:flex-col md:flex-col lg:flex-row lg:justify-center lg:item-center lg:w-11/12">
          <div className="lg:w-1/3">
            {album.cover ? (
              <img src={cover} alt="cover" />
            ) : (
              <img src={ImgNotDefined} alt="no-cover" />
            )}
          </div>
          <div className="flex flex-col item-center justify-center">
            <div className="content__details__title"></div>
            <ul className="content__details__list">
              <li className="content__details__name">
                <div className="flex ">
                  <BsInfoCircle />
                  Informations sur l'album
                </div>
                <div className="flex flex-row">
                  <div className="key">Nom de l'album :</div>
                  <div className="valeur">{album.name}</div>
                  {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
                </div>
              </li>
              <li className="album__card__content__details__artist">
                <div className="flex flex-row">
                  <div className="key">Nom de l'artiste :</div>{" "}
                  <div className="valeur">{album.artist}</div>
                  {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
                </div>
              </li>
              <li className="album__card__content__details__style">
                <div className="flex flex-row">
                  <div className="key">Style :</div>{" "}
                  <div className="valeur">{album.style}</div>
                  {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
                </div>
              </li>
              <li className="album__card__content__details__year">
                <div className="flex flex-row">
                  <div className="key">Année :</div>{" "}
                  <div className="valeur">{album.year}</div>
                  {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
                </div>
              </li>
              <li className="album__card__content__details__format">
                <div className="flex flex-row">
                  <div className="key">Format :</div>
                  <div className="valeur">{album.format}</div>
                  {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
                </div>
              </li>
              <li className="album__card__content__details__gencode">
                <div className="flex flex-row">
                  <div className="key">Codebarre :</div>
                  <div className="valeur">{album.gencode}</div>
                  {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
                </div>
              </li>
              <li className="album__card__content__details__delete">
                <div>
                  <BsTrash onClick={deleteAlbum(albumId)} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  successMessage: state.user.successMessage,
  errorMessage: state.user.errorMessage,
  loggedUser: state.user.loggedUser,
  album: state.albumReducer.album,
  albumId: state.albumReducer.albumId,
  _id: state.albumReducer.albumId,
  cover: state.albumReducer.album.cover,
});

const mapDispatch = (dispatch) => ({
  getAlbumByID: (albumId) => {
    dispatch(getAlbumByID(albumId));
  },
  deleteAlbumByID: (albumId) => {
    dispatch(deleteAlbumByID(albumId));
  },
  /*  openUpdate: (albumId) => {
    dispatch(openUpdate(albumId));
  }, */
});

export default connect(mapState, mapDispatch)(Album);
