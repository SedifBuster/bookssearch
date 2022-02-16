import React from "react";
import Search from "../Search/Search";
import Book from "../Book/Book";
import {changeCategory, changeSort, updateTextInput} from "../../redux/searchReducer";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../API";
import LoadMore from "../common/LoadMore";
import Loader from "../common/Loader";
import Error from "../common/Error";
import style from "./SearchBooksContainer.module.css"

let SearchBooksContainer = () => {
    //selectors
    let text = useSelector((state => state.search.input))
    let categories =  useSelector((state => state.search.categories))
    let sorting = useSelector((state => state.search.sortingBy))
    let category = useSelector((state => state.search.category))
    let sort = useSelector((state => state.search.sort))
    let items = useSelector((state => state.search.items))
    let page = useSelector((state => state.search.currentPage))
    let totalResult = useSelector((state => state.search.totalResult))
    let isFetching = useSelector((state => state.search.isFetching))
    let isFetchError = useSelector((state => state.search.isFetchError))
    //dispatch
    let dispatch = useDispatch()
    let onInputChange = (event) => { dispatch(updateTextInput(event.target.value)) }
    let onCategoryChange = (event) => { dispatch(changeCategory(event.target.value)) }
    let onSortChange = (event) => { dispatch(changeSort(event.target.value)) }
    let onSearchResult = (event) => {
        event.preventDefault()
        dispatch(getData(text, sort, category, page))
    }
    let loadMore = (event) => {
        event.preventDefault()
        dispatch(getData(text, sort, category, page + 30))
    }

    return (
        <div>
        <Search onSearchResult={onSearchResult} onInputChange={onInputChange}
                onCategoryChange={onCategoryChange} onSortChange={onSortChange}
                text={text} categories={categories} sorting={sorting} category={category} sort={sort}/>
         <div className={style.booksResult}>total result: {totalResult}</div>
            <div className={style.booksWrapper}>
            { isFetchError === true
                ? <Error/>
                :
                isFetching === false
                    ?
                items.map((item) => {
                    return (
                        <Book key={item.id} id={item.id} title={item.volumeInfo.title}
                              category={item.volumeInfo.categories} authors={item.volumeInfo.authors}
                        image={item.volumeInfo.imageLinks?item.volumeInfo.imageLinks.smallThumbnail:""}/>
                    )})
                    : <Loader/>
            }
            </div>
            <LoadMore loadMore={loadMore}/>
        </div>
    )
}

export default SearchBooksContainer