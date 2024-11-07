import React from "react";
import Calorie from "../assets/calories.png";
import Proteines from "../assets/protein.png";
import Glucide from "../assets/carbs.png";
import Lipides from "../assets/fat.png";
import "../styles/components/nutrition.css";

function Nutrition({ information }) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    information;
  return (
    <div className="nutrition__list">
      <div className="nutrition">
        <img className="nutrition__image" src={Calorie} alt="Logo Calorie" />
        <div className="nutrition__info">
          <p className="nutrition__number">{calorieCount}KCal</p>
          <h5 className="nutrition__name">Calories</h5>
        </div>
      </div>
      <div className="nutrition">
        <img
          className="nutrition__image"
          src={Proteines}
          alt="Logo Proteines"
        />
        <div className="nutrition__info">
          <p className="nutrition__number">{proteinCount}g</p>
          <h5 className="nutrition__name">Proteines</h5>
        </div>
      </div>
      <div className="nutrition">
        <img className="nutrition__image" src={Glucide} alt="Logo Glucide" />
        <div className="nutrition__info">
          <p className="nutrition__number">{carbohydrateCount}g</p>
          <h5 className="nutrition__name">Glucides</h5>
        </div>
      </div>
      <div className="nutrition">
        <img className="nutrition__image" src={Lipides} alt="Logo Lipides" />
        <div className="nutrition__info">
          <p className="nutrition__number">{lipidCount}g</p>
          <h5 className="nutrition__name">Lipides</h5>
        </div>
      </div>
    </div>
  );
}
export default Nutrition;
