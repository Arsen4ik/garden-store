import { useDispatch } from "react-redux";
import { BASE_URL } from "../../App";
import Counter from "../../UI/Counter";
import Text from "../../UI/Text";
import style from './BasketItem.module.scss'
import close from './Media/close-svgrepo-com.svg'
import { addProductAction, deleteItemAction } from "../../store/basketReducer";
import { Link } from "react-router-dom";

const BasketItem = ({ product }) => {

    const dispatch = useDispatch()

    const changeCount = operation => {
        if (operation === '-') {
            dispatch(addProductAction({ ...product, count: -1 }))
        } else {
            dispatch(addProductAction({ ...product, count: 1 }))
        }
    }
    return (
        <Link to={`/products/${product.id}`}>
            <div key={product.id} className={style.basket_item}>
                <img src={BASE_URL + product.image} alt="" />
                <div className={style.basket_item_data}>
                    <div>
                        <Text text={product.title} />
                        <img src={close} alt="" onClick={(e) => { e.preventDefault(); dispatch(deleteItemAction(product.id)) }} />
                    </div>
                    <div>
                        <Counter count={product.count} changeCount={changeCount} />
                        {
                            product.discont_price ?
                                <>
                                    <Text text={'$' + product.discont_price} type="h2" />
                                    <Text text={'$' + product.price} className="discont_price" />
                                </> :
                                <>
                                    <Text text={'$' + product.price} type="h2" />
                                </>
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BasketItem;