import React, { useState } from 'react'
import MealCard from './MealCard.jsx'

const MainPage = () => {
const [data , setData] = useState();
const [search , setSearch] = useState("");
const [msg , setMsg] = useState("");

const handleInput = (e) =>{
     setSearch(e.target.value);
}

const myFunc = async()=>{
     if(search == ""){
          return setMsg("Please Enter SomeThing...");
     }else{
          const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
          const jsonData = await get.json();
          console.log(jsonData);
          setData(jsonData.meals);
          setMsg("");
     }
}

  return (
    <>
      <h1>Food recipe</h1>
      <div className="container">
          <div className="searchBar">
               <input type='text' placeholder='Enter food name ' onChange={handleInput}/>
               <button onClick={myFunc}>Search</button>
          </div>
          <h3 style={{textAlign:"center"}}>{msg}</h3>
          <div>
               <MealCard detail={data}/>
          </div>
      </div>
    </>
  )
}

export default MainPage