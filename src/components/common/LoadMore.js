import React from "react";
import style from "./LoadMore.module.css"


let LoadMore = (props) => {
    return (<button onClick={props.loadMore} className={style.loadMore}>Load more</button>)
}

export default LoadMore