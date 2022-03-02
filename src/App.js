import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Homepage from './Homepage/Homepage';
import FullPage from './FullPage/FullPage';
import Header from './Header/Header';
import SortMenu from './SortMenu/SortMenu';
import getAllData from './apiCalls';


const App = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [clickedArticle, setArticle] = useState();

  const getAllArticles = async (query) => {
    const data = await getAllData(query)
    if (data.results.length) {
      setAllArticles(data.results)
      return allArticles
    }
  }


  useEffect(() => {
    getAllArticles('home')
  }, [])


  const getClickedArticle = (id) => {
    const matchedArticle = allArticles.find((article) => article.uri === id)
    setArticle(matchedArticle)
  }

  const sortArticles = (query) => {
    const filteredCards = allArticles.filter((article) => {
      return article.section === query
    })
    setFilteredArticles(filteredCards)
  }

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage sortMenu={<SortMenu allArticles={allArticles} sortArticles={sortArticles} />} homeArticles={allArticles} filteredData={filteredArticles} getClickedArticle={getClickedArticle} />} />
        <Route path="/:id" element={<FullPage clickedArticle={clickedArticle} />} />
      </Routes>
    </main>
  )

}

export default App;
