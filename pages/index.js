import React from "react";
import NutritionAnalysis from "../components/NutritionAnalysis";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <div className="Home">
      <NextSeo
        title="Nutrition Analysis Web App"
        description="Type any food and get its nutrition facts"
        openGraph={{
          url: "https://nutritionanalysis.netlify.app/",
          title: "Nutrition Analysis Web App",
          description: "Type any food and get its nutrition facts",
          images: [
            {
              url: "/logo192.png",
              width: 192,
              height: 192,
              alt: "logo",
            },
          ],
          site_name: "NutritionAnalysisApp",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <NutritionAnalysis className="NutritionAnalysis" />
      <Footer />
    </div>
  );
};

export default Home;
