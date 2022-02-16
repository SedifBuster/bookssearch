import {setIsFetchError, setIsFetching, setItems, setTotalResult} from "./redux/searchReducer";

const Url = `https://www.googleapis.com/books/v1/volumes`
const ApiKey = `AIzaSyAWIIoqEnTxPAehPVhxfbQPLsPjbD_ZPyo`

//async getting data Books
export let getData = (searchQuery, orderBy, category, currentPage) => {
    return async (dispatch) => {
        try {
            await
                fetch(`${Url}?q=${searchQuery}+subject:${category === "all"?
                    "": category}&startIndex=${currentPage}&maxResults=30&orderBy=${orderBy}&key=${ApiKey}`)
                    .then((responce) => {  return responce.json()})
                    .then((data) => {
                        dispatch(setIsFetching(true))
                        dispatch(setItems(data.items))
                        dispatch(setTotalResult(data.totalItems))
                    })
        } catch (e) {
            dispatch(setIsFetchError(true))
            dispatch(setIsFetching(false))
            setTimeout(()=>{
                dispatch(setIsFetchError(false))
            },2000)
        }
    }
}
//async get Book Item
export let getItem = async (id, setBookItem, setBookImg, dispatch) => {
    try{
        await
            fetch(`${Url}/${id}?&key=${ApiKey}`)
                .then((responce) => {  return responce.json()})
                .then((data)=>{

                    setBookItem(data.volumeInfo)
                    if(data.volumeInfo.imageLinks  && data.volumeInfo.imageLinks.medium  ){
                    setBookImg(data.volumeInfo.imageLinks.medium)
                    } else {
                        setBookImg("")
                    }
                })
    } catch (e) {
        dispatch(setIsFetchError(true))
        dispatch(setIsFetching(false))
    }

}