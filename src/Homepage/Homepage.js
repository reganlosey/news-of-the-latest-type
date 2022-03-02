import './Homepage.css';
import getAllArticles from '../apiCalls';
import ArticleCard from '../ArticleCard/ArticleCard';

const Homepage = ({ homeArticles, getClickedArticle, sortMenu }) => {
  const articleCards = homeArticles.map((article) => {
    return (
      <ArticleCard
        key={article.uri}
        id={article.uri}
        title={article.title}
        section={article.section}
        subsection={article.subsection}
        image={article.multimedia}
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
      <div className="sort-menu">
        {sortMenu}
      </div>
    </div>
  )


}

export default Homepage;