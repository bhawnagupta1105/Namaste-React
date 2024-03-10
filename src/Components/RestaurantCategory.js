import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems,setshowIndex,dummy}) => {
  // const [showItems, setshowItems] = useState(false);
  const handelClick = () => {
    setshowIndex();
  };
  return (
    <div>
      {/*Header*/}
      <div className=" my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handelClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/expand-arrow--v1.png"
              alt="expand-arrow--v1"
            />
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy}></ItemList>}
      </div>
      {/*accordian Body */}
    </div>
  );
};
export default RestaurantCategory;
