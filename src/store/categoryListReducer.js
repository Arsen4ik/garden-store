const defaultState = {
    categories_name: '',
    categories: [],
    categoriesLinkPath: '',
    categoriesLink_Name: '',
}

const ALL_CATEGORIES = 'ALL_CATEGORIES'
const FOUR_CATEGORIES = 'FOUR_CATEGORIES'

export const categoryListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_CATEGORIES:
            return {
                categories_name: 'Categories',
                categories: action.payload,
            }
        case FOUR_CATEGORIES:
            return {
                categories_name: 'Categories',
                categories: action.payload,
                categoriesLinkPath: '/categories',
                categoriesLinkName: 'All categories',
            }
        default:
            return state
    }
}

export const allCategoriesAction = payload => ({ type: ALL_CATEGORIES, payload })
export const fourCategoriesAction = payload => ({ type: FOUR_CATEGORIES, payload })