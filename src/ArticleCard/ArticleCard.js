import './ArticleCard.css'




const ArticleCard = ({title, abstract, byline, image, url, uri}) => {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{byline}</p>
      <img className="article-img" alt={image.caption} src={image.url}/>


    </article>
  )


}

export default ArticleCard;