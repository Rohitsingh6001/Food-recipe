import React from 'react'
import './MealCard.css'
import {NavLink} from 'react-router-dom'

const MealCard = ({detail}) => {
  return (
    <div className='meals'>
     {!detail ? "Sorry data not found" : detail.map((item,index) =>{
          return(
               <div className="image">
                    <img src={item.strMealThumb} className='img' alt="" />
                    <div className="content">
                         <p>{item.strMeal}</p>
                         <NavLink to={`/${item.idMeal}`}> 
                          <button>Recipe</button>
                         </NavLink>
                    </div>
               </div>
          )
     })}
    </div>
  )
}

export default MealCard