import './App.css';

// Bootstrap을 사용할 시 import 필수!
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonList from './components/ButtonList';

import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Join from './components/Join';
import Login from './components/Login';
import Delete from './components/Delete';
import Select from './components/Select';

function App() {
  return (
    <div className="App">
      <h1>
        <Link to="/">React Main Page</Link>
      </h1>
      <ButtonList/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/join' element={<Join/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>
        <Route path='/select' element={<Select/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
