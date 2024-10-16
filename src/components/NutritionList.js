import React from "react";
import Nutrition from "./Nutrition";
import "../styles/components/nutrition.css";
import calories from "../assets/calories.png";
import protein from "../assets/protein.png";
import carbs from "../assets/carbs.png";
import fat from "../assets/fat.png";

const NutritionList = ({ data }) => {
  return (
    <div className="nutrition__list">
      <Nutrition
        image={calories}
        number={`${data.calorieCount}kcal`}
        name="Calories"
      />
      <Nutrition
        image={protein}
        number={`${data.proteinCount}g`}
        name="Protéines"
      />
      <Nutrition
        image={carbs}
        number={`${data.carbohydrateCount}g`}
        name="Glucides"
      />
      <Nutrition image={fat} number={`${data.lipidCount}g`} name="Lipides" />
    </div>
  );
};

export default NutritionList;
