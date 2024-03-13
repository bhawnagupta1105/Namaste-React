import { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setsearchText] = useState("");
  const [searchRestaurant,Setsearchrestaurant] = useState("");
  const [listRestaurant,Setlistrestaurant] = useState("");

useEffect(() => {
    fetchData();
})

const fetchData = async () => {
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.84401&lng=75.803655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const json = await data.json();
}
  return (
    <div className="mt-[130px] max-w-[1180px] mx-auto">

      <div className="search flex justify-center">
        <label>

        <input
          type="text"
          placeholder="Seach For Restaurant"
          className=" outline-0 rounded-sm px-4 py-2 border border-[#282c3f4d] h-[48px] min-w-[800px]"
          value={searchText}
          onChange={(e) => {
              setsearchText(e.target.value);
            }}
            ></input>
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
           const searchRestaurant = listRestaurant.filter(() => {
            res.data.name.toLowerCase().includes(searchRestaurant.toLowerCase())

           })
           Setsearchrestaurant(searchRestaurant)
          }}
        ></button>
        <div className="mt-[20px] max-w-[180px] mx-auto"></div>
        </label>
      </div>
    </div>
  );
};
export default Search;
