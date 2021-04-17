import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NutritionFacts from "./NutritionFacts";

const NutritionAnalysis = () => {
  const [totalNutrients, setTotalNutrients] = useState([]);
  const [totalDaily, setTotalDaily] = useState([]);
  const [totalWeight, setTotalWeight] = useState([]);
  const [search, setSearch] = useState("");
  const [ingredient, setIngredient] = useState("1 banana");

  useEffect(() => {
    try {
      const getIngredient = async () => {
        const res = await axios.get(`/api/edamam/${ingredient}`);
        setTotalNutrients(res.data.totalNutrients);
        setTotalDaily(res.data.totalDaily);
        setTotalWeight(res.data.totalWeight);
      };
      getIngredient();
    } catch (e) {
      console.log("Error!", e.message);
    }
  }, [ingredient]);

  const getSearch = (e) => {
    e.preventDefault();
    setIngredient(search);
    setSearch("");
  };
  return (
    <div className="container">
      <div className="app-title-container">
        <h1 className="app-title">Nutrition Analysis App</h1>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <Tooltip
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title={
            <span style={{ fontSize: "0.7rem" }}>
              Include the quantity and the measure if you want to get nutrition for the line. Otherwise, you will get only a food
              match (e.g. insert '100 g pasta').
            </span>
          }
        >
          <input
            className="search-bar"
            placeholder="&#xF002; quantity + size + name of the food"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Tooltip>
        <Tooltip
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title={
            <span style={{ fontSize: "0.7rem" }}>
              Always try to include quantity and measure in the text. The app will extract the full nutrition and ingredient data
              from it.
            </span>
          }
        >
          <button className="search-button" type="submit">
            Search
          </button>
        </Tooltip>
      </form>
      <NutritionFacts totalWeight={totalWeight} ingredient={ingredient} totalNutrients={totalNutrients} totalDaily={totalDaily} />
    </div>
  );
};

export default NutritionAnalysis;
