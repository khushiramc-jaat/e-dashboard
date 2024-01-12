import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer';
import SignUp from './components/SignUp';
import PrivateComponet from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        
        <Route element={<PrivateComponet />}>
        <Route path="/" element={<ProductList/>} / >
        <Route path="/add" element={<AddProduct/>} / >
        <Route path="/update/:id" element={<UpdateProduct/>} / >
        <Route path="/logout" element={<h1> Logout Product Listing Components</h1>} / >
        <Route path="/profile" element={<h1>Profile Listing Components</h1>} / >
        </Route>

          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>

      </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
