import React from "react";
import ReactDOM from "react-dom/client";
import Footer1 from "./Landing Page/Footer1";
import Footer2 from "./Landing Page/Footer2";
import './index.css';
import {data} from './restaurantData'
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
          <li>
            CART
          </li>
            <img
              className="cart"
              src="data:image/png;base64,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"
            ></img>
        </ul>
      </div>
    </div>
  );
};
const StyleCard = {
  backgroundColor: "thistle",
};

const RestaurantCard = (props) => {
  const {resData} = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    rating,
    average_cost,
    average_time
  } = props.resData?.data;
  return (
    <div className="ResourceCard" style={StyleCard}>
      <img className="res-logo"
      alt="res-logo"
       src={"https://res.cloudinary.com/swiggy/image/upload/fl_flossy.f_auto,q_auto,w_508,h_320,c_fill/" +
       cloudinaryImageId}/>
    
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating}</h4>
      <h4>{average_cost}</h4>
      <h4>{average_time}</h4>
    </div>
  );
};
const resList = {
   
     type:"restaurant",
    data:
    {
      id: "0",
      name: "Subway",
      rating: 4.7,
      average_cost: 350,
      average_time: 41,
      cuisines: ["Healthy Food", " Salads", " Snacks", " Desserts", " Beverages"],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sdipu3xigqafezlopx03",
      veg: false,
      promoted: true,
      items: [
        {
          id: 1,
          category: "Recommended",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: false,
          best_seller: false,
        }
      ]
    }
   

};
const Body = () => {
  return (
    <div className="Body">
        <div className="Searchbar">
            <img className="search-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNRGo7hXsP5ZCE5XLiLHoTiy3D1CJ6IQyorV9WAp3npDxQeZkXUb4fCz3zpPumAxChjY&usqp=CAU"></img>
            <input type="text" className="s1" placeholder="Search"></input>
        </div>
        <div className="res-container">
           
            <RestaurantCard resData = {resList} />
        

        </div>

    </div>
  );
};

const Footer = () => {
    return (
        <div>
            <Footer1/>
            <Footer2/>
        </div>
    )
}

const AppLayout = () => {
  return (
    <div class="app">
        <Header/>
        <Body/>
        {/* <Footer/> */}
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);