import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Homepage from './Homepage/Homepage';
import FullPage from './FullPage/FullPage';
import Header from './Header/Header';
import getAllData from './apiCalls';


const App = () => {
  const [allArticles, setAllArticles] = useState([]);

  const getAllArticles = async (query) => {
    const data = await getAllData(query)
    console.log(data)
    if(data.results.length){
      setAllArticles(data.results)
      return allArticles
    }
  }
  
  useEffect(() => {
    getAllArticles('home')
  }, [])
  
  
  console.log(allArticles)
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage homeArticles={allArticles} />} />
        <Route path="/:id" element={<FullPage />} />
      </Routes>

    </main>
  )

}

export default App;
