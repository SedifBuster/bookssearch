import React from "react";
import style from "./Search.module.css"

let Search = (props) => {

    return (
        <form onSubmit={props.onSearchResult} className={style.searchForm}>
            <div>
            <input type="text" value={props.text} onChange={props.onInputChange}/>
            <input type="submit" value="search"/>
            </div>
            <div className={style.searchCategory}>
                <div>Category</div>
            <select value={props.category} onChange={props.onCategoryChange} >
                {props.categories.map((category, index)=>{
                    return (<option key={index} defaultValue={category}>{category}</option>)
                })
                }
            </select>
                <div>Sort by</div>
            <select value={props.sort} onChange={props.onSortChange}>
                {props.sorting.map((sort, index) => {
                    return (<option key={index}  defaultValue={sort}>{sort}</option>)
                })}
            </select>
            </div>
        </form>
    )
}

export default Search