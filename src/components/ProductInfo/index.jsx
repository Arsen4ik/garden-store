import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import style from './ProductInfo.module.scss'
import { BASE_URL, countDiscountPercent } from "../../App";
import Button from "../../UI/Button";
import Text from "../../UI/Text";
import Counter from '../../UI/Counter'
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "../../store/basketReducer";
import { fetchAllProducts } from "../../asyncActions/products";
import { someProductAction } from "../../store/productListReducer";

const ProductInfo = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const basket = useSelector(store => store.basket)
    const dispatch = useDispatch()
    const location = useLocation()

    const product = useSelector(store => store.productList).products[0]
    const [count, setCount] = useState(1);

    const changeCount = operation => {
        setCount(prev => operation === '+' ? prev + 1 : prev > 1 ? prev - 1 : prev)
    }

    useEffect(() => {
        if (id > 0 && id < 36) {
            dispatch(fetchAllProducts(someProductAction, id))
        } else {
            navigate('/err')
        }
        document.body.scrollIntoView({ behavior: "smooth" })
    }, [id, navigate, location.state?.product, dispatch]);

    return (
        <section className={`container ${style.product}`}>
            <img src={`${BASE_URL}${product?.image}`} alt="" />
            <div className={`${style.product_categories}`}>
                <Text type="h2" text={product?.title} />
                <div>
                    <Text type="h1" text={'$' + (product?.discont_price || product?.price)} />
                    {product?.discont_price && <Text className="discont_price" type="h2" text={'$' + product?.price} color="lightGray" />}
                    {
                        product?.discont_price &&
                        <Text className='discount_percent_left' color="white"
                            text={'-' + countDiscountPercent(product?.price, product?.discont_price) + '%'} />
                    }
                </div>
                <div className={style.counter_block}>
                    <Counter count={count} changeCount={changeCount} />
                    <Button onClick={() => { dispatch(addProductAction({ ...product, count })) }} color="green" size="max" text={basket[id] ? "Added to cart" : "Add to cart"} /* className={style.add_to_basket} */ />
                </div>
                <Text className="p-bold" text="Description" />
                <Text className="p-smaller" text={product?.description} />
            </div>
        </section>
    );
}

export default ProductInfo;