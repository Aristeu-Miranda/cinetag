import style from './Title.module.css'

function Title({ children }) {
    return (
       <div className={style.texto}>
        {children}
       </div>
    )
}

export default Title