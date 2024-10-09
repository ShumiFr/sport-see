import React from "react";
import Nutrition from "./Nutrition";
import "../styles/components/nutrition.css";
import calories from "../assets/calories.png";
import protein from "../assets/protein.png";
import carbs from "../assets/carbs.png";
import fat from "../assets/fat.png";

const NutritionList = () => {
  return (
    <div className="nutrition__list">
      <Nutrition image={calories} number="345kcal" name="Calories" />
      <Nutrition image={protein} number="155g" name="Protéines" />
      <Nutrition image={carbs} number="290g" name="Glucides" />
      <Nutrition image={fat} number="50g" name="Lipides" />
    </div>
  );
};

export default NutritionList;
