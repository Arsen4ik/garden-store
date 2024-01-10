import style from './DiscountForm.module.scss'
import Text from '../../UI/Text'
import image from './Media/image.png'
import { BASE_URL } from "../../App";
import { useState } from 'react';
import Modal from '../Modal';
import close from '../Modal/Media/close-svgrepo-com.svg'
import styleModal from '../Modal/Modal.module.scss'
import Form from '../Form';

const GetDiscount = () => {

    const [showModal, setShowModal] = useState(false);
    const [isDiscount, setIsDiscount] = useState({});

    const onSubmit = async (data) => {
        setShowModal(true)
        let response = await fetch(`${BASE_URL}/sale/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*"
            },
            body: JSON.stringify({ data })
        })
        const result = await response.json()
        // alert(`Ответ для пользователя ${data.firstname} - status: ${result.status}, message: ${result.message}`)
        setIsDiscount({ firstname: data.firstname, ...result })
        setShowModal(true)
    }

    return (
        <section className={`container ${style.discountForm}`}>
            {
                showModal && (
                    <Modal>
                        <div className={styleModal.modal}>
                            <div>
                                <Text type="h2" text="Congratulations!" color="white" />
                                <Text text={`Ответ для пользователя ${isDiscount.firstname} - статус: ${isDiscount.status}, сообщение: ${isDiscount.message}. Скоро мы вернемя к сам с обратной связью...`} color="white" />
                            </div>
                            <img src={close} alt="" onClick={() => { setShowModal(false) }} />
                        </div>
                    </Modal>
                )
            }
            <Text text="5% off on the first order" color="white" type="h1" />
            <img src={image} alt="" />
            <Form onSubmit={onSubmit} />
        </section>
    );
}

export default GetDiscount;