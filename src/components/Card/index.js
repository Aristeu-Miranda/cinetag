import { useFavoriteContext } from 'contexts/Favorites'
import style from './Card.module.css'
import IconFavorite from './favoritar.png'
import IconNotFavorite from './desfavoritar.png'
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
const { favorite, addNewFavorite } = useFavoriteContext();
const isFavorite = favorite.some((fav) => fav.id === id);
const icon = !isFavorite ? IconFavorite : IconNotFavorite

    return (
        <div className={style.container}>
            <Link className={style.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={style.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img 
                src={icon} 
                alt='Favoritar Filme' 
                className={style.favoritar}  
                onClick={() => {
                    addNewFavorite({ id, titulo, capa })
                  }}
            />
        </div>
    )
}

export default Card