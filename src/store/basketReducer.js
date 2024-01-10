let defaultState = []
defaultState.totalCount = 0

const saveBasketDB = newBasket => {
    localStorage.setItem('basket', JSON.stringify({
        newBasket,
        totalCount: newBasket.totalCount
    }))
}

const checkIsBasketDB = JSON.parse(localStorage.getItem('basket'))
if (checkIsBasketDB?.newBasket.length) {
    defaultState = checkIsBasketDB.newBasket
    defaultState.totalCount = checkIsBasketDB.totalCount
}

const ADD_PRODUCT = 'ADD_PRODUCT'
const CLEAR_BASKET = 'CLEAR_BASKET'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { id, count, ...otherProps } = action.payload
            const isProductInBasket = state.find(product => product.id === id)
            if (isProductInBasket) {
                isProductInBasket.count += count
            } else {
                state.push({ id, count, ...otherProps })
            }
            const newState = [...state].filter(prodcut => prodcut.count > 0)
            newState.totalCount = state.totalCount + count
            saveBasketDB(newState)
            return newState;
        case DELETE_PRODUCT:
            const id2 = action.payload
            const cnt = state.find(product => product.id === id2).count
            const newState2 = state.filter(product => product.id !== id2)
            newState2.totalCount = state.totalCount - cnt
            saveBasketDB(newState2)
            return newState2;
        case CLEAR_BASKET:
            const clearedState = []
            clearedState.totalCount = 0
            saveBasketDB(clearedState)
            return clearedState
        default:
            return state;
    }
}

export const addProductAction = payload => ({ type: ADD_PRODUCT, payload })
export const clearAction = () => ({ type: CLEAR_BASKET })
export const deleteItemAction = payload => ({ type: DELETE_PRODUCT, payload })