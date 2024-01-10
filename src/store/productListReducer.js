const defaultState = {
    products_name: '',
    products: [],
    productsLinkPath: '',
    productsLinkName: '',
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SALE_PRODUCTS = 'SALE_PRODUCTS'
const CATEGORIES_PRODUCTS = 'CATEGORIES_PRODUCTS'
const FOUR_SALE_PRODUCTS = 'FOUR_SALE_PRODUCTS'
const SOME_PRODUCT = 'SOME_PRODUCT'

export const productsListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                products_name: 'All products',
                products: action.payload,
            }
        case SALE_PRODUCTS:
            return {
                products_name: 'Discounted items',
                products: action.payload.filter(product => product.discont_price),
            }
        case CATEGORIES_PRODUCTS:
            return {
                products_name: action.payload.category.title,
                products: action.payload.data,
            }
        case FOUR_SALE_PRODUCTS:
            return {
                products_name: 'Sale',
                products: action.payload.filter(product => product.discont_price).sort((productA, productB) => Math.round((productB.price - productB.discont_price) / productB.price * 100) - Math.round((productA.price - productA.discont_price) / productA.price * 100)).slice(0, 4),
                productsLinkPath: '/sales',
                productsLinkName: 'All sales',
            }
        case SOME_PRODUCT:
            const { products, id } = action.payload
            return {
                products: [products.find(product => product.id === +id)]
            }
        default:
            return state
    }
}

export const allProductsAction = payload => ({ type: ALL_PRODUCTS, payload })
export const saleProductsAction = payload => ({ type: SALE_PRODUCTS, payload })
export const categoriesProductsAction = payload => ({ type: CATEGORIES_PRODUCTS, payload })
export const fourSaleProductsAction = payload => ({ type: FOUR_SALE_PRODUCTS, payload })
export const someProductAction = payload => ({ type: SOME_PRODUCT, payload })