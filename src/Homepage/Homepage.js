import './Homepage.css';
import getAllArticles from '../apiCalls';
import ArticleCard from '../ArticleCard/ArticleCard';

const Homepage = ({ homeArticles }) => {
  const articleCards = homeArticles.map((article) => {
    return (
      <ArticleCard
        key={Math.floor(Math.random() * Date.now())}
        title={article.title}
        abstract={article.abstract}
        byline={article.byline}
        url={article.url}
        uri={article.uri}
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