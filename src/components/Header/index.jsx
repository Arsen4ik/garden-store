import style from './Header.module.scss'
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Text from '../../UI/Text';
import cardImage from './Media/basket.svg'
import ground from './Media/ground.svg'
import plant from './Media/plant.svg'
import menu from './Media/menu.svg'
import { useEffect, useState } from 'react';

const Header = () => {

    const location = useLocation()
    const { id } = useParams()

    const basket = useSelector(store => store.basket.totalCount)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMenu, setIsMenu] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setIsMenu(false)
    }, [location.pathname, id]);

    return (
        <header className={`${style.header}`}>
            <Link to={'/'} className={style.logo}>
                <img src={plant} alt="" />
                <img src={ground} alt="" />
            </Link>
            {windowWidth > 900 ?
                <nav className={style.nav}>
                    <Link to={'/'}>
                        <Text text="Main page" />
                    </Link>
                    <Link to={'/categories'}>
                        <Text text="Categories" />
                    </Link>
                    <Link to={'/products'}>
                        <Text text="All products" />
                    </Link>
                    <Link to={'/sales'}>
                        <Text text="All sales" />
                    </Link>
                </nav>
                :
                <>
                    <img onClick={() => setIsMenu(!isMenu)} className={`${style.menu} ${isMenu ? style.menu_active : null}`} src={menu} alt="" />
                    {isMenu &&
                        <nav className={`${style.nav_mobile} ${style.nav_mobile_active}`}>
                            <Link to={'/'}>
                                <Text text="Main page" />
                            </Link>
                            <Link to={'/categories'}>
                                <Text text="Categories" />
                            </Link>
                            <Link to={'/products'}>
                                <Text text="All products" />
                            </Link>
                            <Link to={'/sales'}>
                                <Text text="All sales" />
                            </Link>
                        </nav>
                    }
                </>
            }
            <Link to={'/basket'} className={style.basket}>
                {!!basket && (<p className={style.basketCounter}>{basket}</p>)}
                <img src={cardImage} alt="" className={style.basket} />
            </Link>
        </header>
    );
}

export default Header;