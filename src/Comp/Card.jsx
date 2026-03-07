import React from 'react'

const Card = ({meal}) => {
  return (
      <div className="group bg-white dark:bg-gray-900 border border-orange-500 rounded-xl overflow-hidden 
      shadow-md hover:shadow-2xl hover:shadow-orange-500/50
      transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">       
        <div className="relative">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-1500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-5">
                <h2 className="text-2xl m-8 font-semibold group-hover:font-bold transition-all duration-300 hover:mt-5">{meal.strMeal}</h2>        
        </div>
              <div className="p-3  ">
              <p className="text-sm  text-gray-700 dark:text-gray-900"> Try recipe! Enjoy at home!
              </p>
              </div>
        </div>
    </div>
  )
}

export default Card