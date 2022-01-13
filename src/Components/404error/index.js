import Footer from "../Footer";
import Header from "../Header";

const error404 = () => {
  return (
    <div className="error404">
      <Header />
      <div>Erreur 404 : ressource non trouvée</div>
      <Footer />
    </div>
  );
};

export default error404;
