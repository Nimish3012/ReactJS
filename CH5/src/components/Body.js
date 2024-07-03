import { useState } from "react";
import { resList } from "./Constants";
import RestaurantCard  from "./RestaurantCard";

function filterData(searchText , restaurants )
{
  if(searchText==="")
  {
    return resList;
  }
  const filterData =  restaurants.filter((restaurant)=> 
    restaurant.info.name.includes(searchText)
);
if(filterData=="")
    {
      window.alert("Not Found");
      return resList;
    }
return filterData;
}
const Body = () => {
  
  const [restaurants , setRestaurants] = useState(resList);
  const [searchText , setSearchText] = useState();
    return (
      <div className="body">

        <div className=" search-container">
          {
            <input 
              type="rext"
              className="search-input"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}

              /> 
          }
          <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText , restaurants);
            setRestaurants(data);
          }}
          > 
            search
          </button>
          

        </div>
        
        <div className="res-container">
          {restaurants.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;