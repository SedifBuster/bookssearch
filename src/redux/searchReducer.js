const UPDATE_INPUT = 'UPDATE_INPUT'
const CHANGE_CATEGORIES = 'CHANGE_CATEGORIES'
const CHANGE_SORT = 'CHANGE_SORT'
const SET_ITEMS = 'SET_ITEMS'
const SET_TOTAL_RESULT = 'SET_TOTAL_RESULT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IS_FETCH_ERROR = 'SET_IS_FETCH_ERROR'

const defaultState = {
    items: [],
    isFetching: false,
    isFetchError: false,
    input: '',
    categories: ["all", "art", "biography", "computers", "history", "medical", "poetry"],
    sortingBy: ["relevance", "newest"],
    category: 'all',
    sort: 'relevance',
    currentPage: '0',
    totalResult: ''
}

export default function searchReducer(state = defaultState,action) {
    switch (action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                input: action.input
            }
        case CHANGE_CATEGORIES:
            return {
                ...state,
                category: action.category
            }
        case CHANGE_SORT:
            return {
                ...state,
                sort: action.sort
            }
        case SET_ITEMS:
            return  {
                ...state,
                items: action.items,
                isFetching: false
            }
        case SET_TOTAL_RESULT:
            return {
                ...state,
                totalResult: action.totalResult
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_IS_FETCH_ERROR:
            return  {
                ...state,
                isFetchError: action.isFetchError
            }
        default: return state
    }
}

export let updateTextInput = (input) => {return { type: UPDATE_INPUT, input}}
export let changeCategory = (category) => {return { type: CHANGE_CATEGORIES, category}}
export let changeSort = (sort) => {return { type: CHANGE_SORT, sort}}
export let setItems = (items) => {return { type: SET_ITEMS, items}}
export let setTotalResult = (totalResult) => {return { type: SET_TOTAL_RESULT, totalResult}}
export let setIsFetching = (isFetching) => {return {type: SET_IS_FETCHING, isFetching}}
export let setIsFetchError = (isFetchError) => {return {type: SET_IS_FETCH_ERROR, isFetchError}}