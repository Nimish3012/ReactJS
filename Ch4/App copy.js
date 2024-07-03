// contains all the coments and other details

import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./Res";


/*
header
    logo
    cart
    Nav iterm 

Body
    Search
    Restro Container
        Restro Card

Footer
    Links
    About
    Contact
*/
//const resList = extresList;


const Header = () => {

  return (
    <div className="Header">

      <div className="logo-container">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/7.-doordash-logo.jpg"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  );
};

// const RestaurantCard = ({ resData }) => {  one way 

// const RestaurantCard = (props) => {  another way 
//   const {resData} = props;


// for both the above ways  return statement will be same , 
// resData.info.name

// const RestaurantCard = (props) => {
//     const {resData} = props;
//   return (
//     <div className="res-cards">
//       <img className="res-logo" alt="res-log" 
//       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}  />
//       <h3> {resData.info.name}</h3>
//       <h4>{resData.info.costForTwo}</h4>
//       <h4>{resData.info.cuisines.join(", ")}</h4>
//     </div>
//   );
// };


const RestaurantCard = (props) => {

  const {resData} = props;
 
  const {name , costForTwo, cuisines, deliveryTime, avgRating, cloudinaryImageId, sla} = resData?.info;   //destructured   , no need to explictly type resData.info 
  
  return (
    <div className="res-cards">
      <img className="res-logo" alt="res-log" 
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}  />
      {/* no we can directly use the property name , ets  */}
      <h3> {name}</h3>
      <h4>{costForTwo}</h4>
      <h4>Deliver in :{sla.deliveryTime} mins</h4>
      <h4>Rating : {avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );

};


const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search

      </div>

      <div className="res-container">
        {/* we need multiple restro cards so lets create a seperate container for thats */}
       
        {/* <RestaurantCard resData={resList[0]}/>
        <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>

        we can use loops instead of writing this multiple times


        infact we should use .map better
         */}

         
        {resList.map((res)=>(<RestaurantCard key={res.info.id} resData ={res}/>))} 
        {/* always give a key 
        reason : without uniqye id:  all are rendered together , and when adding just 1 single rc card, react can differ which is new so it just re render all data
        without key : all cards are same for react ;
        on the other hand , if we have unique id for all cards, react know which card is new , and only render the new cards
        React say : do not set index as keys : index as keys are anti pattern
        */}

         
        

       
      </div>

    </div>

  );
};

const AppLayout = () => { 
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer/> */}
    </div>
  );

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
