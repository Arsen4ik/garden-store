import CategoryList from "../../components/CategoryList";
import ProductList from '../../components/ProductList'
import Banner from '../../components/Banner'
import GetDiscount from "../../components/GetDiscount";
import { useRef } from "react";

const MainPage = () => {
    const scrollRef = useRef();
    const autoScroll = () => scrollRef.current.scrollIntoView({ behavior: "smooth" })
    return (
        <main>
            <Banner autoScroll={autoScroll} />
            <CategoryList />
            <GetDiscount />
            <ProductList ref={scrollRef} />
        </main>
    );
}

export default MainPage;