import React from 'react'

const Card = ({ meal }) => {
  return (
    <div className="group bg-white dark:bg-gray-900 border border-orange-500 rounded-xl overflow-hidden 
    shadow-md hover:shadow-2xl hover:shadow-orange-500/50
    transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">

      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4">

          <h2 className="text-xl font-semibold">
            {meal.strMeal}
          </h2>

          <p className="text-xs bg-orange-500 opacity-90 text-white px-3 py-1 rounded-full inline-block">
            Try recipe! Enjoy at home!
          </p>

        </div>
      </div>

    </div>
  )
}

export default Card;
