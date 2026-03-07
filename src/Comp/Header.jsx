import React from "react";
import { useTheme } from "../Context/useTheme";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const { dark, setDark } = useTheme();

  return (
    <header
      className={`flex flex-col md:flex-row justify-between items-center p-3 border-b border-orange-500 
      ${dark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl font-semibold">
          <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent animate-gradient font-bold">
            Recipe
          </span>{" "}
           Craft
        </h1>

        <p className="text-sm md:text-base">Discover & Save Recipes</p>
      </div>

      <div className="flex gap-8 pr-7">
        <button
          onClick={() => setDark((prev) => !prev)}
          className={`w-16 h-8 flex items-center rounded-full p-1 border border-orange-500 transition duration-300
          ${dark ? "bg-gray-800" : "bg-orange-100"}`}
        >
          <div
            className={`w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md transform transition duration-300
            ${dark ? "translate-x-8" : "translate-x-0"}`}
          >
            {dark ? (
              <Moon size={14} className="text-gray-800" />
            ) : (
              <Sun size={14} className="text-orange-700 " />
            )}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;