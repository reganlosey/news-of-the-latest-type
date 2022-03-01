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
        image={article.multimedia[0]}
        uri={article.uri}
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