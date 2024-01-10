import style from './Basket.module.scss'
import Text from '../../UI/Text'
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import close from '../Modal/Media/close-svgrepo-com.svg'
import { useForm } from 'react-hook-form';
import Modal from '../Modal';
import styleModal from '../Modal/Modal.module.scss'
import BasketItem from '../BasketItem';
import { clearAction } from '../../store/basketReducer';
import Form from '../Form';

const Basket = () => {

    const basket = useSelector(store => store.basket)
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false);

    const {
        reset
    } = useForm({ mode: 'onChange' })

    const clearForm = () => {
        reset()
        dispatch(clearAction())
    }

    const onSubmit = () => {
        setShowModal(true)
    }

    return (
        <section className='container'>
            {
                showModal && (
                    <Modal>
                        <div className={styleModal.modal}>
                            <div>
                                <Text type="h2" text="Congratulations!" color="white" />
                                <Text text="Your order has been successfully placed on the website.
A manager will contact you shortly to confirm your order." color="white" />
                            </div>
                            <img src={close} alt="" onClick={() => { setShowModal(false); clearForm() }} />
                        </div>
                    </Modal>
                )
            }
            <div className={style.title}>
                <Text text="Shopping cart" type="h1" />
                {<><hr /><Link to="/products" className={style.title_link}><Text text="Back to the store" color="gray" className="p-smaller" /></Link></>}
            </div>
            {
                basket.length ?
                    <div className={style.basket}>
                        <div className={style.basket_list}>
                            {
                                basket.map(product => <BasketItem key={product.id} product={product} />)
                            }
                        </div>
                        <Form onSubmit={onSubmit} classN='basket_form'>
                            <Text type="h2" text="Order details" />
                            <div>
                                <Text text={`${basket.totalCount} items total`} color="gray" type="h2" className="thin" />
                                <Text text={`$${basket.reduce((acc, product) => acc + (product.discont_price ? product.discont_price : product.price) * product.count, 0).toFixed(2)}`} type="h1" />
                            </div>
                        </Form>
                    </div>
                    :
                    <div className={style.empty_basket}>
                        <Text text="Looks like you have no items in your basket currently." />
                        <Link to='/products'><Button size="big" text='Continue Shopping' /></Link>
                    </div>
            }
        </section>
    );
}


export default Basket;