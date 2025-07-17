import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonData = await get.json();
    setInfo(jsonData.Meals[0]);
  };

  if (info != "") {
    getInfo();
  }
  return (
    <>
      {!info ? (
        "Data Not found"
      ) : 
        <div className="mealInfo">
          <br />
          <img src={info.strMealThumb} alt="" />
          <div className="info">
            <h1>Recipe detail</h1>
            <p>{info.strMeal}</p>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
          <NavLink to={"/"}>
            <button>Back</button>
            <br />
            <br />
          </NavLink>
        </div>
      }
    </>
  );
};

export default Mealinfo;
