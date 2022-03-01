import './ArticleCard.css'
import React, { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, image, uri, shortUrl, redirect }) => {
  const splitUri = id.split('-');
  const linkId = splitUri[splitUri.length - 1]
  return (
    <article className="card">
      <h2>{title}</h2>
      <img className="article-img" alt={image.caption} src={image.url} />
      <Link to={`/:${linkId}`} onClick={redirect(id)}>Click</Link>



    </article>
  )


}

export default ArticleCard;