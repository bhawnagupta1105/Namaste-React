import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
      fetchData();

  },[])

  const fetchData = async( ) => {
      const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.84401&lng=75.803655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json);
      //Optional Chaining
      setlistofRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  // Conditional Rendering
//   if(listofRestaurants.length === 0){
//       return <Shimmer/>
//   }

  //instead of if else we will simply use ternary operator
  return listofRestaurants.length === 0 ? (
       <Shimmer/>
  ):(
    <div className="Body">
      <div className="filter">
        <div className="Searchbar">
          {/* <img className="search-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNRGo7hXsP5ZCE5XLiLHoTiy3D1CJ6IQyorV9WAp3npDxQeZkXUb4fCz3zpPumAxChjY&usqp=CAU"></img> */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter(
                (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.data.rating > 4
            );
            setlistofRestaurants(filteredList);
            //filter he restro

            //console.log(resList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
             
           {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key = {restaurant?.info?.id} resData = {restaurant}/>
           ))}
  
          </div>
    </div>
  );
};
export default Body;
