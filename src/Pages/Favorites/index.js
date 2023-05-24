import Banner from "components/Banner"
import Title from "components/Title"
import style from './Favorites.module.css'
import Card from "components/Card"
import { useFavoriteContext } from "contexts/Favorites"

function Favorites() {

    const { favorite } = useFavoriteContext();

    return (
        <>
           <Banner imagem='favoritos' />
           <Title>
               <h1>Meus favoritos</h1>
           </Title>
           <section className={style.container}>
               {favorite.map((fav) => {
                return <Card {...fav} key={fav.id} />
               })}
           </section>
        </>
    )
}

export default Favorites