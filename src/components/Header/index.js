import { Link } from 'react-router-dom'
import style from './Header.module.css'
import Logo from './logo.png'
import HeaderLink from 'components/HeaderLink'

function Header() {
    return (
        <header className={style.header}>
            <Link>
                <img src={Logo} alt='Logo da Cinetag' />
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header