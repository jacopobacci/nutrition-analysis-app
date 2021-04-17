import axios from "axios";
import React, { useEffect, useState } from "react";

const Image = ({ ingredient }) => {
  const [image, setImage] = useState("");
  const imageIngredient = encodeURI(ingredient.split(" ").pop().toString());

  useEffect(() => {
    try {
      const getImage = async () => {
        const res = await axios.get(`/api/pixabay/${imageIngredient}`);
        setImage(res.data.hits[2].webformatURL);
      };
      getImage();
    } catch (e) {
      console.log("Error!", e.message);
    }
  }, [imageIngredient]);

  return <img className="image" src={image} alt={imageIngredient} />;
};

export default Image;
