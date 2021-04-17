import axios from "axios";

const handler = async (req, res) => {
  const { edamam } = req.query;
  try {
    const response = await axios.get(
      `https://api.edamam.com/api/nutrition-data?app_id=${process.env.EDAMAM_ID}&app_key=${process.env.EDAMAM_KEY}&ingr=${edamam}`
    );
    res.send(response.data);
  } catch (e) {
    console.log("Error!", e.message);
  }
};

export default handler;
