import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
import NavBar from './components/NavBar';
import Order from './components/Order';
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import NewProduct from './components/NewProduct';
import OfferProduct from './components/OfferProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Authprovider from './components/Auth';
import RequiredAuth from './components/RequiredAuth';
import OrderConfirm from './components/OrderConfirm';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Authprovider>
    
       <NavBar/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/order-confirm" element={<Order/>}/>
        <Route path="*" element={<NoMatch/>}/>
        <Route path="/product" element={<RequiredAuth><Product/></RequiredAuth>}>
          <Route index element={<NewProduct/>}/>
          <Route path='new' element={<NewProduct/>}/>
          <Route path='offer' element={<OfferProduct/>}/>
        </Route>
        <Route path="/user" element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<RequiredAuth><Profile/></RequiredAuth>}/>
        <Route path="/order" element={<RequiredAuth><OrderConfirm/></RequiredAuth>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/cart" element={<RequiredAuth><Cart/></RequiredAuth>} /> 
                    
       
      </Routes>
      
      </Authprovider>
    </div>
  );
}

export default App;
