import './ArticleCard.css'
import React, { Link, useNavigate } from 'react-router-dom';




const ArticleCard = ({ title, abstract, byline, image, url, shortUrl }) => {
  const splitUrl = shortUrl.split('/')
  const id = splitUrl[splitUrl.length - 1]
  const navigate = useNavigate();
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{byline}</p>
      <img className="article-img" alt={image.caption} src={image.url} />
      <Link to={`/${id}`}> Click</Link>



    </article>
  )


}

export default ArticleCard;