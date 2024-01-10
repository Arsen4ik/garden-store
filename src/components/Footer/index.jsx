import style from "./Footer.module.scss"
import Text from "../../UI/Text";
// import instagram from './Media/ic-instagram.svg'
// import whatsapp from './Media/ic-whatsapp.svg'
import vk from './Media/vk-svgrepo-com.svg'
import telegram from './Media/telegram-alt-svgrepo-com.svg'

const Footer = () => {
    return (
        <footer className="container">
            <Text text="Contact" type="h1" />
            <div className={style.contacts}>
                <div className={style.contact}>
                    <Text text="Phone" color="gray" />
                    <Text text="+7 (499) 350-66-04" type="h2" />
                </div>
                <div className={style.contact}>
                    <Text text="Socials" color="gray" />
                    <div className={style.logos}>
                        {/* <img src={instagram} alt="" /> */}
                        {/* <img src={whatsapp} alt="" /> */}
                        <a href="https://vk.com/feed" rel="noreferrer" target="_blank">
                            <img src={vk} alt="" />
                        </a>
                        <a href="https://web.telegram.org/" rel="noreferrer" target="_blank">
                            <img src={telegram} alt="" />
                        </a>
                    </div>
                </div>
                <div className={style.contact}>
                    <Text text="Address" color="gray" />
                    <Text text="Dubininskaya Ulitsa, 96, Moscow, Russia, 115093" type="h2" />
                </div>
                <div className={style.contact}>
                    <Text text="Working Hours" color="gray" />
                    <Text text="24 hours a day" type="h2" />
                </div>
            </div>
            <div style={{ width: "100%" }}><iframe title="map" width="100%" className={style.map}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ithub%20college%20VDNH+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
        </footer>
    );
}

export default Footer;