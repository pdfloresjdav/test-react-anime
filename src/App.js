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
  return (
    <Router>
      <Routes>
        <Route exact path="https://pdfloresjdav.github.io/test-react-anime/" element={ <Home /> } />
        <Route exact path="https://pdfloresjdav.github.io/test-react-anime/login" element={ <Login /> } />
        <Route exact path="https://pdfloresjdav.github.io/test-react-anime/register" element={ <Register /> } />
      </Routes>
  </Router>
  );
}

export default App;
