import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';


export default function Productdetails({favitem,setFavitem}) {
    const { idMeal } = useParams(); // Extract the idMeal from the URL
    const [product, setProduct] = useState(null); // Store the product data
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track any error that occurs during fetch

    useEffect(() => {
        console.log("Fetching product details for id:", idMeal); // Log the ID for debugging
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                console.log(response.data); // Log the response from API

                if (response.data.meals && response.data.meals.length > 0) {
                    setProduct(response.data.meals[0]); // Set product details if available
                } else {
                    setError("Product not found"); // Handle case when no product is returned
                }
            } catch (err) {
                console.error("Error fetching product:", err);
                setError("Failed to fetch product details"); // Handle API error
            } finally {
                setLoading(false); // Set loading to false once the request is complete
            }
        };

        fetchProductDetails();
    }, [idMeal]); // Re-fetch if idMeal changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // If product data is invalid or missing
    if (!product) return <div>Product not found or invalid ID</div>;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = product[`strIngredient${i}`];
        const measure = product[`strMeasure${i}`];
        if (ingredient && ingredient !== "") {
            ingredients.push(`${measure ? measure : ''} ${ingredient}`);
        }
    }

    function addtofav(){
        const itemexist=favitem.find((item)=> item.product.idMeal === product.idMeal)
        if (!itemexist){
            const newitem ={product};
            setFavitem((state)=>[...state, newitem]);
            toast.success("Added to FAV....")
        }
    }

    return (
        <div className="container container-fluid">
            <div className="row f-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid" id="product_image">
                    <img
                        src={product.strMealThumb}
                        alt="not found"
                        height="500"
                        width="500"
                    />
                </div>

                <div className="col-12 col-lg-5 mt-5">
                    <h3>{product.strMeal}</h3>
                    <h4>Category = {product.strCategory}</h4>
                    <h4>{product.strArea}</h4>
                    <hr />
                    <button type="button" onClick={addtofav} id="cart_btn" className="btn btn-primary d-inline ml-4">
                        Add to Fav
                    </button>
                    <hr />

                    <h4>Ingredient</h4>
                    <ul>
                        {ingredients.length > 0 ? (
                            ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))
                        ) : (
                            <li>No ingredients found</li>
                        )}
                    </ul>
                </div>
            </div>
            <hr/>
            <div>
            <h4 className="mt-2">Instructions:</h4>
                    <p style={{ color: "red" }}>{product.strInstructions}</p> {/* API description */}
            </div>
            <hr/>
            <div>
            <p id="product_seller mb-3">Recipe Source by: <strong>RecipeNest</strong></p>
            </div>
        </div>
    );
}
