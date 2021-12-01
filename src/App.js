import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Explore from './Pages/Explore';
import MovieDetail from './Pages/MovieDetail';
import Watchlist from './Pages/Watchlist';
import AboutMe from './Pages/AboutMe';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path = "/" exact element={<Home/ >}/>
          <Route path = "/Login" exact element={<Login/ >}/>
          <Route path = "/aboutme" exact element={<AboutMe/ >}/>
          <Route path = "/Explore" exact element={<Explore/ >}/>
          <Route path = "/Explore/:movieID" exact element={<MovieDetail/ >}/>
          <Route path = "/Watchlist/" exact element={<Watchlist/ >}/>
        </Routes>
      </Router>
  );
}

export default App;
