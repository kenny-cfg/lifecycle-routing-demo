import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Root from './component/Root';
import Demo from './component/Demo';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">ROOT</Link>
          <Link to="/demo">DEMO</Link>
        </header>
        <div className='container'>
          <Routes>
            <Route path="/" index element={<Root/>}></Route>
            <Route path="demo" element={<Demo />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
