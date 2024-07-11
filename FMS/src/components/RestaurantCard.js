import { IMG_CDN_URL } from "./Constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, costForTwo, cuisines, deliveryTime, avgRating, cloudinaryImageId, sla } = resData?.info;
  
    return (
      <div className="res-cards">
        <img
          className="res-logo"
          alt="res-log"
          src={IMG_CDN_URL + cloudinaryImageId} 
        />
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h4>Deliver in: {sla.deliveryTime} mins</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>{cuisines.join(', ')}</h4>x
      </div>
    );
  };

  export default RestaurantCard;