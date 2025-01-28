import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export default function Favourite({favitem, setFavitem}){

    function removeItem(item) {

        const deleteItem = favitem.filter((i) => {
            if (i.product.idMeal !== item.product.idMeal) {
                return true;    
            }
            toast("Deleted successful")
        })
        setFavitem(deleteItem)
    }
        
    
    return     <div className="container container-fluid">
    <h2 className="mt-5">Your Cart: <b>{favitem.length}</b></h2>
    
    <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8">
            {favitem.map((item) =>(
                      <Fragment>
                      <div className="cart-item">
                          <div className="row">
                              <div className="col-2 col-lg-3">
                                  <img src={item.product.strMealThumb} alt="Laptop" height="90" width="115" />
                              </div>

                              <div className="col-2 col-lg-3">
                               <Link to={`/product/${item.product.idMeal}`}><h4>name:</h4>
                               <p>{item.product.strMeal}</p></Link>
                              </div>

                              <div className="col-2 col-lg-3">
                                <h4>Category</h4>
                              <p>{item.product.strCategory}</p>
                              </div>


                              <div className="col-2 col-lg-3">
                                <i id="delete_cart_item" onClick={() => removeItem(item)} className="fa fa-trash btn btn-danger"></i>
                              </div>
          
                            
          
                          </div>
                      </div>
                      </Fragment>
                      
            ) 
                
            )}
            <hr />
        </div>
    </div>
</div>

}