import { useFavoritoContext } from "contexts/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <Link className={styles.link} to={`/${id}`}>
        <h2>{titulo}</h2>
        <img
          src={icone}
          alt="Favoritar filme"
          className={styles.favoritar}
          onClick={() => adicionarFavorito({ id, titulo, capa })}
        />
      </Link>
    </div>
  );
};

export default Card;
