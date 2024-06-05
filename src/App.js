import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
          <Route path='/home' element={<Home></Home>}/>
        
      </Routes>
    </div>
  );
}

export default App;
