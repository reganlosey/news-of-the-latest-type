import './FullPage.css'
import React from 'react';

const FullPage = ({ clickedArticle }) => {
  const media = clickedArticle.multimedia[0]
  const publishDate = new Date(clickedArticle.published_date).toDateString()
  return (
    <article className="full-page">
      <div className="full-pg-wrapper">
        <h1 className="title">{clickedArticle.title}</h1>
        <p>{publishDate}</p>
        <p>{clickedArticle.byline}</p>
        <div className="story-container">
          <p className="abstract">{clickedArticle.abstract}</p>
          <img className="full-pg-img" src={media.url} alt={media.caption} />
        </div>
        <a className="full-story-link" href={clickedArticle.url} target="_blank">Read the full story here</a>
      </div>

    </article>
  )


}

export default FullPage;