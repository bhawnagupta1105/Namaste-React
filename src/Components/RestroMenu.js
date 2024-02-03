import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch();
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };

  if (resInfo === null) 
  return;
  <Shimmer />;

  const {} = p;
  const { itemCards } = p;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map(item => <li key = {}>{item.}</li>)}
        <li>{} - {} </li>
        <li>{} - {} </li>
        <li>{} - {} </li>
        <li>{} - {} </li>
      </ul>
    </div>
  );
};
export default RestroMenu;
