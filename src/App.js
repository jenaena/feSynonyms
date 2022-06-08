import './App.css';
import{Home} from './Home';
import{InsertSynonyms} from './InsertSynonyms';
import{WordSynonyms} from './WordSynonyms';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';



function App() {
  return (
    
    <BrowserRouter>
    <div className="App container">
      <h3 className = "d-flex justify-content-center m-3">
        React JS Frontend
      </h3>

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/Home">
              Home
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/WordSynonyms">
              Search synonyms
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/InsertSynonyms">
              Insert synonyms
            </NavLink>
          </li>
        </ul>

      </nav>

      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/InsertSynonyms" element={<InsertSynonyms/>}/>
        <Route path="/WordSynonyms" element={<WordSynonyms/>}/>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;