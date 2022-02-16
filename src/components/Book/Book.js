import React from "react";
import {Link} from "react-router-dom";
import style from "./Book.module.css"

let Book = (props) => {

    return (
        <div className={style.bookWrapper}>
         <Link to={`/book/${props.id}`}>
             <div  className={style.bookImgWr}>
         <img src={props.image} alt="" className={style.bookImg}/>
             </div>
         <div className={style.bookCategory}>{props.category}</div>
         <div className={style.bookTitle}>{props.title}</div>
         <div className={style.bookAuthors}>{props.authors}</div>
         </Link>
        </div>
    )}

export default Book