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
    console.log('MATCHED>>>', matchedArticle.short_url)
    setArticle(matchedArticle)
  }

  // const sortArticles = (query) => {
  //   const filteredArticles = allArticles.filter((article) => {
  //     return article.section === query
  //   })
  //   console.log(filteredArticles)
  //   return filteredArticles
  // }

  const sortArticles = (query) => {
    getAllArticles(query)
  }


  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage sortMenu={<SortMenu allArticles={allArticles} sortArticles={sortArticles}/>} homeArticles={allArticles} getClickedArticle={getClickedArticle} />} />
        <Route path="/:id" element={<FullPage clickedArticle={clickedArticle} />} />
      </Routes>
      {/* <SortMenu allArticles={allArticles}/> */}

    </main>
  )

}

export default App;
