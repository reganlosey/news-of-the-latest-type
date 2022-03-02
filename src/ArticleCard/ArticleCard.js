import './ArticleCard.css'
import React, { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, section, subsection, image, redirect }) => {
  const splitUri = id.split('-');
  const linkId = splitUri[splitUri.length - 1]
  return (
    <article className="card">
      <h2 className="title">{title}</h2>
      <h3 className="section">Section: {section}, {subsection}</h3>
      <Link to={`/:${linkId}`} onClick={() => redirect(id)}>Read More</Link>



    </article>
  )


}

export default ArticleCard;