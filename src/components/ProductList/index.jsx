import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { forwardRef, useEffect, useState } from "react";
import style from './ProductList.module.scss'
import Text from "../../UI/Text";
import ProductFilters from "../ProductFilters";
import ProductItem from "../ProductItem";
import { filters, makeFetchingFunc } from "./funcs";

const ProductList = forwardRef((_, ref) => {

    const { products_name: title, products, productsLinkPath, productsLinkName } = useSelector(store => store.productList)
    const location = useLocation()
    const dispatch = useDispatch()
    const { id } = useParams()

    const [productList, setProductList] = useState([]);
    const [inputPriceFrom, setInputPriceFrom] = useState(0);
    const [inputPriceTo, setInputPriceTo] = useState(Infinity);
    const [inputDiscountsOnly, setInputDiscountsOnly] = useState(false);
    const [inputPriceSorting, setInputPriceSorting] = useState('by default');

    useEffect(() => {
        setInputPriceFrom(0)
        setInputPriceTo(Infinity)
        setInputDiscountsOnly(false)
        setInputPriceSorting('by default')

        const { func, reducer } = makeFetchingFunc(location.pathname)
        dispatch(func(reducer, id))
        document.body.scrollIntoView({ behavior: "smooth" })
    }, [location.pathname, id, dispatch]);

    useEffect(() => {
        inputPriceTo === 0 && setInputPriceTo(Infinity)
        setProductList(filters(products)(inputPriceFrom, inputPriceTo)(inputDiscountsOnly)(inputPriceSorting))
    }, [inputPriceFrom, inputPriceTo, inputDiscountsOnly, inputPriceSorting, products]);

    return (
        <section ref={ref} className={`container ${style.products}`}>
            <div className={style.title}>
                <Text text={title} type="h1" />
                {productsLinkName && <><hr /><Link to={productsLinkPath} className={style.title_link}><Text text={productsLinkName} color="gray" className="p-smaller" /></Link></>}
            </div>
            {
                location.pathname !== '/' && <ProductFilters filters={{ inputPriceFrom, inputPriceTo, inputDiscountsOnly, inputPriceSorting }} methods={{ setInputPriceFrom, setInputPriceTo, setInputDiscountsOnly, setInputPriceSorting }} />
            }
            <div className={style.product_list}>
                {
                    productList.map(product => <ProductItem key={product.id} product={product} />)
                }
            </div>
        </section>
    );
});

export default ProductList;
