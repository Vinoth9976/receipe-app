import { Fragment, useEffect, useState } from "react";
import "./Home.css";
import Product from "../components/Productcard";
import Search from "../components/Search";
// import { compileFunction } from "vm";



export default function Home(){

    const [category,setCategory]=useState([]);
    const [loading, setLoading] = useState(true); 
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      const query = searchTerm ? searchTerm : "chicken";
      fetch(`${process.env.REACT_APP_URL}${query}` )  // You can change 'chicken' to another search term if needed
          .then((res) => res.json())
          .then((res) => {
              setCategory(res.meals || []); // If meals don't exist, fallback to an empty array
              setLoading(false); // Stop loading once the data is fetched
          })
          .catch((err) => {
              console.error("Error fetching data:", err);
              setCategory([]);
              setLoading(false); // Stop loading if an error occurs
          });
  }, [searchTerm]);

    return<Fragment>
    
    
     
     <section id="products" className="container mt-5">
       <div className="row">
       <div className="col-12 col-md-6 mt-2 mt-md-0" style={{marginLeft:'55%'}}> <Search setSearchTerm={setSearchTerm} /> </div><br></br>
       <div className="row">
                    {loading ? (
                        <div>Loading...</div> // Display loading message while fetching data
                    ) : (
                        category.length > 0 ? (
                            category.map((meal, index) => (
                                <Product key={index} meal={meal} /> // Pass each meal as a prop
                            ))
                        ) : (
                            <div>No meals found</div> // If no meals were found, show this message
                        )
                    )}
                </div>
       </div>
     </section>   
</Fragment>
}

    
