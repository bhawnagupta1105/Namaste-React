import React from "react";
import ReactDOM from "react-dom/client";
import Footer1 from "../Landing Page/Footer1";
import Footer2 from "../Landing Page/Footer2";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestroMenu from "./Components/RestroMenu";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";


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
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      ,
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu/>
      }
    ],
      errorElement: <Error/>
  },
  

])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);
