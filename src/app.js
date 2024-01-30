import React from "react";
import ReactDOM from "react-dom/client";
import Footer1 from "../Landing Page/Footer1";
import Footer2 from "../Landing Page/Footer2";
import Header from "./Components/Header";
import Body from "./Components/Body";



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
    <div className="app">
        <Header/>
        <Body/>
        {/* <Footer/> */}
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);