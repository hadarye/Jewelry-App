import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import CreateYourOwn from './Components/CreateYourOwn/CreateYourOwn';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/createyourown' element={<CreateYourOwn></CreateYourOwn>}>
            {/* <Route path='/earings'></Route>
            <Route path='/bracelet'></Route>
            <Route path='/necklaces'></Route> */}
          </Route>
      </Routes>
    </div>
  );
}

export default App;
