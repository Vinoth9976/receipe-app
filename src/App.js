// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
 import Header  from './components/Header';
 import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Productdetails from './pages/Productdetails';
import { useState } from 'react';
import {ToastContainer} from "react-toastify";
import Favourite from './pages/Favourite';


function App() {

  const [favitem, setFavitem] = useState([]);

  return<div className='App'>
    <Router>
      <div>
        <ToastContainer theme='dark' position='top-center'/>
        <Header favitem={favitem}/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:idMeal' element={<Productdetails favitem={favitem} setFavitem={setFavitem}/>}/>
            <Route path='/favourite' element={<Favourite favitem={favitem} setFavitem={setFavitem}/>}/>
        </Routes>
      <Footer/>

      </div>
     
    </Router>
  </div>
}

export default App;
