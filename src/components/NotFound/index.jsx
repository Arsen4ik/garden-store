import style from './NotFound.module.scss'
import Text from '../../UI/Text'
import Button from '../../UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import ball from './Media/ball.png'
import four from './Media/4.svg'
import { useEffect } from 'react';

const NotFound = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => navigate('/'), 3000)
    }, [navigate])

    return (
        <section className={`container ${style.not_found}`}>
            <div>
                <img src={four} alt="" />
                <img src={ball} alt="" />
                <img src={four} alt="" />
            </div>
            <Text type="h1" text="Page Not Found" />
            <Text text="We’re sorry, the page you requested could not be found.
Please go back to the homepage." color="gray" />
            <Link to={'/'}><Button text="Go home" /></Link>
        </section>
    );
}

export default NotFound;