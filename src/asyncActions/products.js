import { BASE_URL } from '../App'

export function fetchAllProducts(reducer, id) {
    return function (dispatch) {
        fetch(`${BASE_URL}/products/all`)
            .then(res => res.json())
            .then(products => dispatch(reducer(id ? { products, id } : products)))
            .catch(err => console.error('ОШИБКА:', err))
    }
}

export function fetchCategoriesProducts(reducer, id) {
    return function (dispatch) {
        fetch(`${BASE_URL}/categories/${id}`)
            .then(res => res.json())
            .then(products => dispatch(reducer(products)))
            .catch(err => { console.error('ОШИБКА:', err); window.location.pathname = 'err' })
    }
}