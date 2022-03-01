import './Homepage.css';
import getAllArticles from '../apiCalls';

const Homepage = ({ homeArticles }) => {
  const articleCards = homeArticles.map((article) => console.log(article))
  return (
    <div className="homepage">
      <div className="article-list">


      </div>



    </div>
  )


}

export default Homepage;