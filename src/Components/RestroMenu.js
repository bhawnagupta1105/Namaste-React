import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.84401&lng=75.803655&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };

  if (resInfo === null) return;
  <Shimmer />;

  const {} = data?.cards[0]?.card?.card?.info;
  const { itemCards } = data?.cards[2]?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{cloudinaryImageId}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"RS"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestroMenu;
