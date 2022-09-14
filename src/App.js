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
    <Router basename="/test-react-anime">
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
      </Routes>
  </Router>
  );
}

export default App;
