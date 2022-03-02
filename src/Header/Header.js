import './Header.css';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <h1>News, of the Latest Type</h1>
      <Link to="/">Home</Link>
      
    </header>
  )


}

export default Header;