import './FullPage.css'
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import getAllData from '../apiCalls';

const FullPage = ({ clickedArticle }) => {
  console.log(clickedArticle)

  const location = useLocation()
  console.log(location)


  return (
    <h1>Full Page!</h1>
  )


}

export default FullPage;