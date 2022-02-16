import './App.css';
import SearchBooksContainer from "./components/SearchBooksContainer/SearchBooksContainer";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import BookItem from "./components/Book/BookItem";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
      <Route path='/' element={<SearchBooksContainer/>}/>
      <Route path='/book/:id' element={<BookItem/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
