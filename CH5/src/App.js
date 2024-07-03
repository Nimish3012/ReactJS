import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./components/Constants";  //named import   
import Header from "./components/Header";  //defaul import
import Body from "./components/Body";

//if we have two named exports we can import :  import {header, title} from "./components/Header.js" 
//if I want to import every export from a file i can : import * as obj  from ./comp/head;  then use obj.header and obj.title


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
