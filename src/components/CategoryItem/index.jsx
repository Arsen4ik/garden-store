import { BASE_URL } from "../../App";
import Text from "../../UI/Text";
import style from './CategoryItem.module.scss'
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
    return (
        <div key={category.id} className={`${style.category_item}`}>
            <Link to={`/categories/${category.id}`}>
                <img src={`${BASE_URL}${category.image}`} alt="" />
                <Text text={category.title} />
            </Link>
        </div>
    );
}

export default CategoryItem;