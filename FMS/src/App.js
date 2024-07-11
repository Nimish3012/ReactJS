import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./components/Constants";  //named import   
import Header from "./components/Header";  //defaul import
import Contact from "./components/Contact";
import About from "./components/About";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";


//if we have two named exports we can import :  import {header, title} from "./components/Header.js" 
//if I want to import every export from a file i can : import * as obj  from ./comp/head;  then use obj.header and obj.title


const AppLayout = () => {
  return (
      <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children: [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path : "/about",
        element :<About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);