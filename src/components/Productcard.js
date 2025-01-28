import React from "react";
import { Link } from "react-router-dom";


export default function product({meal}){
    return  <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card-bg card p-3 rounded">
      <img
        className="card-img-top mx-auto"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <div className="card-body d-flex flex-column">
        <h4>{meal.strMeal}</h4>
        <Link to={`/product/${meal.idMeal}`} id="view_btn" className="btn btn-block">View Details</Link>
      </div>
    </div>
  </div>
}