import { BASE_URL } from '../App'
import { allCategoriesAction, fourCategoriesAction } from '../store/categoryListReducer'

export function fetchAllCategories() {
    return function (dispatch) {
        fetch(`${BASE_URL}/categories/all`)
            .then(res => res.json())
            .then(categories => dispatch(allCategoriesAction(categories)))
            .catch(err => { console.error('ОШИБКА:', err); return err })
    }
}

export function fetchFourCategories() {
    return function (dispatch) {
        fetch(`${BASE_URL}/categories/all`)
            .then(res => res.json())
            .then(categories => categories.slice(0, 4))
            .then(categories => dispatch(fourCategoriesAction(categories)))
            .catch(err => { console.error('ОШИБКА:', err); return err })
    }
}
