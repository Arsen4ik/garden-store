import { fetchAllProducts, fetchCategoriesProducts } from "../../asyncActions/products"
import { allProductsAction, categoriesProductsAction, fourSaleProductsAction, saleProductsAction } from "../../store/productListReducer"



export const makeFetchingFunc = locate => {
    if (locate === '/') return { func: fetchAllProducts, reducer: fourSaleProductsAction }
    else if (locate === '/products') return { func: fetchAllProducts, reducer: allProductsAction }
    else if (locate === '/sales') return { func: fetchAllProducts, reducer: saleProductsAction }
    else return { func: fetchCategoriesProducts, reducer: categoriesProductsAction }
}



let newProducts = []

export const filters = products => {
    newProducts = [...products]
    return filterPrice
}

const filterPrice = (inputPriceFrom, inputPriceTo) => {
    if (inputPriceFrom > 0) {
        newProducts = newProducts.filter(product => product.discont_price ? product.discont_price >= inputPriceFrom : product.price >= inputPriceFrom)
    }
    if (inputPriceTo >= inputPriceFrom && inputPriceTo < Infinity) {
        newProducts = newProducts.filter(product => product.discont_price ? product.discont_price <= inputPriceTo : product.price <= inputPriceTo)
    }
    return filterDiscount
}

const filterDiscount = inputDiscountsOnly => {
    if (inputDiscountsOnly) {
        newProducts = newProducts.filter(product => product.discont_price)
    }
    return filterType
}

const filterType = inputPriceSorting => {
    if (inputPriceSorting === 'newest') {
        newProducts = newProducts.sort((productA, productB) => new Date(productB.createdAt).getTime() - new Date(productA.createdAt).getTime())
    } else if (inputPriceSorting === 'price: high-low') {
        newProducts = newProducts.sort((productA, productB) => (productB.discont_price || productB.price) - (productA.discont_price || productA.price))
    } else if (inputPriceSorting === 'price: low-high') {
        newProducts = newProducts.sort((productA, productB) => (productA.discont_price || productA.price) - (productB.discont_price || productB.price))
    }
    return newProducts
}