import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import CreateYourOwn from './Components/CreateYourOwn/CreateYourOwn';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/createyourown' element={<CreateYourOwn></CreateYourOwn>}>
        </Route>
        <Route path='/earings' element={<ProductsPage productType="earing"></ProductsPage>}></Route>
        <Route path='/bracelets' element={<ProductsPage productType="bracelet"></ProductsPage>}></Route>
        <Route path='/necklaces' element={<ProductsPage productType="necklace"></ProductsPage>}></Route>
        <Route path='/rings' element={<ProductsPage productType="ring"></ProductsPage>}></Route>
        <Route path="/product/:productName" element={<Product></Product>}></Route>
      </Routes>
    </div>
  );
}

export default App;
