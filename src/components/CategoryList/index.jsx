import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchAllCategories, fetchFourCategories } from "../../asyncActions/categories";
import { useEffect } from "react";
import style from './CategoryList.module.scss'
import Text from "../../UI/Text";
import CategoryItem from "../CategoryItem";

const CategoryList = () => {
    const { categories_name: title, categories, categoriesLinkPath, categoriesLinkName } = useSelector(store => store.categoryList)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (location.pathname === '/') dispatch(fetchFourCategories())
        else if (location.pathname === '/categories') dispatch(fetchAllCategories())
        document.body.scrollIntoView({ behavior: "smooth" })
    }, [location.pathname, dispatch]);
    return (
        <section className={`container ${style.categories}`}>
            <div className={style.title}>
                <Text text={title} type="h1" />
                {categoriesLinkName && <><hr /><Link to={categoriesLinkPath} className={style.title_link}><Text text={categoriesLinkName} color="gray" className="p-smaller" /></Link></>}
            </div>
            <div className={style.category_list}>
                {
                    categories.map(category => <CategoryItem key={category.id} category={category} />)
                }
            </div>
        </section>
    );
}

export default CategoryList;