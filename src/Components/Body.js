import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [filteredRestaurant2, setfilteredRestaurant2] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.84401&lng=75.803655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    //Optional Chaining
    setlistofRestaurants(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );    
    setfilteredRestaurant2(
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  //   if(listofRestaurants.length === 0){
  //       return <Shimmer/>
  //   }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        LOOKS LIKE YOU'RE OFFLINE!!! PLEASE CHECK YOUR INTERNET CONNECTION
      </h1>
    );
  //instead of if else we will simply use ternary operator
  return listofRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter flex flex-wrap">
        <div className=" flex m-2 p-2 ">
        <div className="search ">
          {/* <img className="search-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNRGo7hXsP5ZCE5XLiLHoTiy3D1CJ6IQyorV9WAp3npDxQeZkXUb4fCz3zpPumAxChjY&usqp=CAU"></img> */}
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search  flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              console.log(filteredList);
              setfilteredRestaurant(filteredList);
              //filter he restro
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      
        </div>
        </div>
           
        <hr></hr>
<div className="flex">


          <h1 className="py-2 px-2 font-bold text-2xl">
            Top restaurant chains in Jaipur
          </h1>
          <div className="float-right">
          <button>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-left-2.png" alt="circled-left-2"/>
          </button>
          <button>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-right-2.png" alt="circled-right-2"/>
         </button>
        </div>
        </div>
        <div>
          <div className="flex ">
            {filteredRestaurant2.map((restaurant) => (
              <Link
                key={restaurant?.info.id}
                to={"/restaurants" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
                {}
              </Link>
            ))}
          </div>
        </div>
        <hr></hr>
      <h1 className="py-2 px-2 font-bold text-2xl">
        Restaurants with online food delivery in Jaipur
      </h1>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants" + restaurant.info.id}
          >
            {<RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
