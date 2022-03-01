import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage/Homepage';
import FullPage from './FullPage/FullPage';
import Header from './Header/Header';
import getAllArticles from './apiCalls';

getAllArticles()

const App = () => {
  return (
    <main className="App">
      <Homepage />

    </main>
  )

}

export default App;
