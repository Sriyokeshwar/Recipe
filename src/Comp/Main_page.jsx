import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/useTheme";
import Card from "./Card";
import axios from "axios";

const MainPage = () => {
  const { dark } = useTheme();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetchRec();
  }, []);

  const fetchRec = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast",
      );
      setMeals(response.data.meals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchMeal = async (e) => {
    e.preventDefault();
    setSearched(true);
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      );
      setMeals(res.data.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen w-full text-center ${dark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="py-6">
        <h1 className="text-5xl font-semibold">
          <span className="text-orange-600">The</span> Recipe Craft
        </h1>

        <p
          className={`text-xl mt-3 ${dark ? "text-gray-300" : "text-gray-900"}`}
        >
          Search Your Favourite Meal
        </p>
      </div>

      <div className="relative w-full max-w-xl mx-auto">
        <input
          value={search}
          placeholder="Search Your Recipe [Noodles]"
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          type="text"
          className={`border border-orange-400 w-full outline-none px-5 pr-28 py-3 rounded-full transition duration-300
          ${dark ? "bg-gray-900 text-gray-300 placeholder-gray-500" : "bg-white text-gray-900 placeholder-gray-400"}`}
        />

        <button
          onClick={searchMeal}
          className="bg-orange-500 px-5 py-1 rounded-full cursor-pointer font-semibold absolute right-3 top-2"
        >
          Search
        </button>
      </div>

      <div className="mt-12 mx-auto">
        {loading && <p className="text-center">Preparing....</p>}

        {!loading && searched && meals.length === 0 && (
          <p className="text-center text-xl font-semibold text-red-500 mt-10">
            ❌ No recipes found
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-12">
          {!loading &&
            meals.length > 0 &&
            meals.map((meal) => (
              <Card key={meal.idMeal} meal={meal} dark={dark} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
