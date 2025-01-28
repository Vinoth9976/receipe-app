import image from "../images/receipe.jpeg"
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header({favitem}){
  
    return     <nav className="navbar text-white bg-blue">
    <div className="col-12 col-md-3">
      <div className="navbar-brand">
        <Link to='/'>
        <img width="100rem" height="100rem" className="logo-images" src={image} alt="img not found" /></Link>
      </div>
    </div>
 
    <div className="col-12 col-md-6 mt-2 mt-md-0" >
    <h1 style={{marginLeft:'30%'}} id="products_heading"> Receipe</h1>
    </div>
 
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center text-white">
        <Link to={"/favourite"}>
        <span id="cart" className="btn-blue">Favourite</span>
        <span className="ml-1"  id="cart_count">{favitem.length}</span></Link>  
      </div>
    </nav>
}