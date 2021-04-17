import axios from "axios";

const handler = async (req, res) => {
  const { pixabay } = req.query;
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${pixabay}&image_type=photo&per_page=3&category=food`
    );
    res.send(response.data);
  } catch (e) {
    console.log("Error!", e.message);
  }
};

export default handler;
