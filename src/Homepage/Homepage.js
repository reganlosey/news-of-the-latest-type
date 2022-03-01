import './Homepage.css';
import getAllArticles from '../apiCalls';
import ArticleCard from '../ArticleCard/ArticleCard';

const Homepage = ({ homeArticles, getClickedArticle }) => {
  const articleCards = homeArticles.map((article) => {
    return (
      <ArticleCard
        key={article.uri}
        id={article.uri}
        title={article.title}
        section={article.section}
        image={article.multimedia[0]}
        shortUrl={article.short_url}
        redirect={getClickedArticle}
      />
    )
  })


  return (
    <div className="homepage">
      <div className="article-list">
        {articleCards}
      </div>



    </div>
  )


}

export default Homepage;