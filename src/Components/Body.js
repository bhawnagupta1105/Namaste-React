import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
    const [listofRestaurants,setlistofRestaurants] = useState([resList]);

    useEffect(() => {
        fetchData();

    },[])

    const fetchData = async() => {
        const data = await fetch();

        const json = await data.json();

        console.log(json);
        setlistofRestaurants(list of api);

    }
    return (
      <div className="Body">
          <div className="Searchbar">
          <img className="search-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNRGo7hXsP5ZCE5XLiLHoTiy3D1CJ6IQyorV9WAp3npDxQeZkXUb4fCz3zpPumAxChjY&usqp=CAU"></img>
              <input  type="text" className="s1" placeholder="Search"></input>
          </div>
          <div className="filter">
              <button className="filter-btn" onClick={() =>{
                  const filteredList = listofRestaurants.filter(
                      (res) => res.data.rating >4
                      );
                      setlistofRestaurants(filteredList)
                //filter he restro


                console.log(resList)
              }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container">
             
           {resList.map((restaurant) => (
            <RestaurantCard key = {restaurant.data.id} resData = {restaurant}/>
           ))}
  
          </div>
  
      </div>
    );
  };
  export default Body;