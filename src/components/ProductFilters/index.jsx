import { useLocation } from 'react-router-dom';
import Input from '../../UI/Input';
import Text from '../../UI/Text';
import style from './ProductFilters.module.scss'

const ProductFilters = ({ filters, methods }) => {

    const location = useLocation()
    const { inputPriceFrom, inputPriceTo, inputDiscountsOnly, inputPriceSorting } = filters;
    const { setInputPriceFrom, setInputPriceTo, setInputDiscountsOnly, setInputPriceSorting } = methods;

    return (
        <div className={style.filters}>
            <div>
                <Text text="Price" />
                <Input type="number" placeholder="from" onChange={(e) => !Number.isNaN(+e.target.value) && setInputPriceFrom(+e.target.value)} value={inputPriceFrom || ''} />
                <Input type="number" placeholder="to" onChange={(e) => !Number.isNaN(+e.target.value) && setInputPriceTo(+e.target.value)} value={inputPriceTo === Infinity ? '' : inputPriceTo} />
            </div>
            {
                location.pathname !== '/sales' &&
                <div>
                    <Text text="Discounted items" />
                    <Input type="checkbox" onChange={(e) => setInputDiscountsOnly(e.target.checked)} value={inputDiscountsOnly} />
                </div>
            }
            <div>
                <Text text="Sorted" />
                <Input type="select" options={['by default', 'newest', 'price: high-low', 'price: low-high']} onChange={(e) => setInputPriceSorting(e.target.value)} value={inputPriceSorting} />
                <Text text={inputPriceSorting} className="p-smaller-input_price_sorting_value" color="gray" />
            </div>
        </div>
    );
}

export default ProductFilters;