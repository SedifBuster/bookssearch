import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getItem} from "../../API";
import {useDispatch, useSelector} from "react-redux";
import Error from "../common/Error";
import style from "./BookItem.module.css"

let BookItem =  () => {
    const { id } = useParams()
    let dispatch = useDispatch()
    const [bookItem, setBookItem] = useState({})
    const [bookImg, setBookImg] = useState('')
    let isFetchError = useSelector((state => state.search.isFetchError))

    useEffect(()=>{
        getItem(id,setBookItem,setBookImg,dispatch)

    },[])

    if(isFetchError === true) {
        return (<Error/>)
    } else{
        return (
            <div className={style.bookItemWrapper}>
                <img src={bookImg}  alt="No image" className={style.bookItemImg}/>
                <div className={style.bookItemText}>
                <h1 >{bookItem.title}</h1>
                <div className={style.bookItemAuthors}>{bookItem.authors}</div>
                  <div > {bookItem.description}</div>
                </div>
            </div>
        )
    }

}

export default BookItem