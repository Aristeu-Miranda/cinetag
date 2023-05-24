import style from './Banner.module.css'

function Banner ({ imagem }) {
    return (
        <div className={style.capa}
             style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}
        ></div>
    )
}

export default Banner