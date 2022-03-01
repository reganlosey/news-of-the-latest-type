import './ArticleCard.css'
import React, { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, image, uri, shortUrl, redirect }) => {
  return (
    <article className="card">
      <h2>{title}</h2>
      <img className="article-img" alt={image.caption} src={image.url} />
      <Link to={`/${shortUrl}`} onClick={() => redirect(shortUrl)}>Click</Link>



    </article>
  )


}

export default ArticleCard;