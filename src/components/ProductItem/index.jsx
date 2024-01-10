import { Link } from "react-router-dom";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import { BASE_URL, countDiscountPercent } from "../../App";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from './ProductItem.module.scss'
import { addProductAction } from "../../store/basketReducer";

const ProductItem = ({ product }) => {
    const [isButton, setIsButton] = useState(null);
    const dispatch = useDispatch()
    return (
        <div onMouseEnter={() => setIsButton(product.id)} onMouseLeave={() => setIsButton(null)} key={product.id} className={`${style.product_item}`}>
            <Link to={`/products/${product.id}`}>
                {
                    product.discont_price &&
                    <Text className='discount_percent' color="white"
                        text={'-' + countDiscountPercent(product.price, product.discont_price) + '%'} />
                }
                <img src={`${BASE_URL}${product.image}`} className={style.product_image} alt="" />
                {isButton === product.id && <Button text="Add to cart" onClick={(e) => { e.preventDefault(); dispatch(addProductAction({ ...product, count: 1 })) }} size="max" color="green" className={style.add_to_basket} />}
                <Text text={product.title} />
                <div className={style.price}>
                    <Text text={`$${product.discont_price || product.price}`} type="h2" />
                    {product.discont_price && <Text className="discont_price" text={'$' + product.price} color="lightGray" />}
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;