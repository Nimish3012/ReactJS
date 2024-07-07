import { useState, useEffect } from "react";
import { resList } from "./Constants";
import RestaurantCard from "./RestaurantCard";
function filterRestaurants(searchText, restaurants) {
  if (searchText === "") {
    return restaurants;
  }

  const filteredData = restaurants.filter((restaurant) =>
  
    (restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()) 
  || restaurant?.info?.cuisines?.map(cuisine => cuisine.toLowerCase()).join(', ').includes(searchText.toLowerCase())
  || restaurant.info.avgRating==(searchText)
    ) 
  );

 

  if (filteredData.length === 0) {
    window.alert("Not Found");
    return restaurants;
  }

  return filteredData;
}

    //dapi  data  cards  4  card card  gridElements infoWithStyle restaurants 
const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  const [filteredRes, setFilteredRes] = useState(resList);

  const [searchText, setSearchText] = useState("");

  useEffect(()=> {
    //API CALL
    getRestro();
  },[])

  async function getRestro() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if(!data.ok){
        throw new Error('error fetching url'); 
      }
      const json = await data.json();
      setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants , );
      setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants , );
    } catch (error) {
      console.error('error while fetching data', error);
      
    }
  }


  
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterRestaurants(searchText, restaurants);
            setFilteredRes(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;


// import { useState } from "react";
// import { resList } from "./Constants";
// import RestaurantCard  from "./RestaurantCard";

// function filterData(searchText , restaurants )
// {
//   if(searchText==="")
//   {
//     return resList;
//   }
//   const filterData =  restaurants.filter((restaurant)=> 
//     restaurant.info.name.includes(searchText)
// );
// if(filterData=="")
//     {
//       window.alert("Not Found");
//       return resList;
//     }
// return filterData;
// }
// const Body = () => {
  
//   const [restaurants , setRestaurants] = useState(resList);
//   const [searchText , setSearchText] = useState();
//     return (
//       <div className="body">

//         <div className=" search-container">
//           {
//             <input 
//               type="rext"
//               className="search-input"
//               placeholder="Search"
//               value={searchText}
//               onChange={(e) => {
//                 setSearchText(e.target.value);
//               }}

//               /> 
//           }
//           <button
//           className="search-btn"
//           onClick={() => {
//             const data = filterData(searchText , restaurants);
//             setRestaurants(data);
//           }}
//           > 
//             search
//           </button>
          

//         </div>
        
//         <div className="res-container">
//           {restaurants.map((res) => (
//             <RestaurantCard key={res.info.id} resData={res} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default Body;