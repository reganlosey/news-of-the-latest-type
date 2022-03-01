import './FullPage.css'

import React, { useState, useEffect } from 'react';

const FullPage = ({ clickedArticle }) => {
  const media = clickedArticle.multimedia[0]
  const publishDate = new Date(clickedArticle.published_date).toDateString()
  console.log(publishDate)

  // useEffect(() => {
  //   if(clickedArticle.uri){
  //     setArticleInfo(clickedArticle)
  //     setMedia(clickedArticle.multimedia[0])
  //   }
  // }, [])

  return (
    <article className="full-page">
      <div className="full-pg-wrapper">
        <h1>{clickedArticle.title}</h1>
        <p>{publishDate}</p>
        <p>{clickedArticle.byline}</p>
        <img className="full-pg-img" src={media.url} alt={media.caption} />
        <p>{clickedArticle.abstract}</p>
      </div>

    </article>
  )


}

export default FullPage;