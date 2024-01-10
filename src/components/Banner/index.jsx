import Button from '../../UI/Button';
import Text from '../../UI/Text';
import style from './Banner.module.scss'

const Banner = ({ autoScroll }) => {
    return (
        <section className={`container ${style.banner}`}>
            <Text type="h1" text="Amazing Discounts on Garden Products!" color="white" className="title" />
            <Button onClick={autoScroll} text="Check out" />
        </section>
    );
}

export default Banner;