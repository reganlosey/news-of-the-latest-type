import './Header.css';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <Link className="home-link" to="/">Home</Link>
      <h1>News, of the Latest Type</h1>
      
    </header>
  )


}

export default Header;