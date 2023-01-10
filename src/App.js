import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import About from './pages/About';
import ListBook from './components/ListBook';
import AddBook from './pages/AddBook';
import Detail from './pages/Detail';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Acceuil />}>
          
        </Route>
        <Route path="/add" element={<AddBook />}>
          
        </Route>
        <Route path="/about" element={<About />}>
          
        </Route>
        <Route path="/detail/:idBook" element={<Detail />}>

          
        </Route>
        </Routes>
    </Router>
  );
}

export default App