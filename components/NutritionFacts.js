import React from "react";
import Image from "./Image";

const NutritionFacts = ({ totalWeight, ingredient, totalNutrients, totalDaily }) => {
  const roundNumber = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
  return (
    <div>
      {totalWeight === 0 ? (
        <p className="error-message">
          I cannot calculate the nutrition if you don't specify the quantity. Please check if you have entered a quantity for the
          ingredient and also the right spelling of the words. E.g. 'one large apple' or '1 cup rice'.
        </p>
      ) : (
        <div className="card">
          <div className="row heading">
            <div className="column">
              <h2>Nutrition Facts</h2>
              <p>of</p>
              <h3 className="ingredient">{ingredient}</h3>
              <Image ingredient={ingredient} />
              <p className="weight">
                Weigth: <b>{roundNumber(totalWeight)} g</b>
              </p>
            </div>
          </div>
          <div className="daily-value-container">
            <span className="daily-value">
              % daily value<span className="text-to-hide">, based on a 2000 calorie diet</span>
            </span>
          </div>
          <div className="row">
            <table>
              <tbody>
                {Object.entries(totalNutrients).map(([nutrient, value]) => {
                  return (
                    <tr key={nutrient}>
                      <td className="total-nutrients">
                        <b>{value.label}</b>: {roundNumber(value.quantity)} {value.unit}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <table>
              <tbody>
                {Object.entries(totalDaily).map(([nutrient, value]) => {
                  return (
                    <tr key={nutrient}>
                      <td className="total-daily">
                        <b>{value.label}</b>: {roundNumber(value.quantity)} {value.unit}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionFacts;
