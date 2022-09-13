import './styles/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Register} from "./components/Register";
import {Login} from "./components/Login";
import { Home } from './components/Home';
function App() {
  let url1 = `${process.env.REACT_APP_PRD_URL}/`;
  let url2 = `${process.env.REACT_APP_PRD_URL}/login`;
  let url3 = `${process.env.REACT_APP_PRD_URL}/register`;
  console.log(url2)
  return (
    <Router>
      <Routes>
        <Route exact path={url1} element={ <Home /> } />
        <Route exact path={url2} element={ <Login /> } />
        <Route exact path={url3} element={ <Register /> } />
      </Routes>
  </Router>
  );
}

export default App;
