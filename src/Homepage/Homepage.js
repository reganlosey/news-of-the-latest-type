import './Homepage.css';
import getAllArticles from '../apiCalls';
import ArticleCard from '../ArticleCard/ArticleCard';

const Homepage = ({ homeArticles, getClickedArticle, filteredData, sortMenu }) => {
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

  const filteredCards = filteredData.map((article) => {
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

  const displayCards = () => {
    if(filteredData.length){
      return filteredCards
    } else {
      return articleCards
    }
  }


  return (
    <div className="homepage">
      <div className="article-list">
        {displayCards()}
      </div>
      <div className="sort-menu">
        {sortMenu}
      </div>
    </div>
  )


}

export default Homepage;