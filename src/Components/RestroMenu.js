import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/userRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestroMenu = () => {
  const { resId } = useParams();
  // const [resInfo, setresInfo] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.84401&lng=75.803655&restaurantId=" +
  //       resId +
  //       "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setresInfo(json.data);
  // };
  // Or
  const data = useRestaurantMenu(resId);
  const [showIndex,setshowIndex] = useState(null);
  if (data === null) return <Shimmer/>;
 

  const {name,cuisines,costForTwoMessage} = data?.cards[0]?.card?.card?.info;
  //const { itemCards } = data?.cards[0]?.groupedCard[0]?.cardGroupMap?.REGULAR?.cards[1].card.card;
  const categories = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
  ); //filter wala concept aayega(33.26)
  

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-2lg">{cuisines.join(",")} - {costForTwoMessage}</p>
      {/*categories accordian*/}
      {categories && categories.map((category,index) => {
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setshowIndex = {() => setshowIndex(index)}
        />
      })}
    </div>
  );
};
export default RestroMenu;
