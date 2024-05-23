import { NextPage } from "next";
import HorizontalParallaxPage from "../components/screens/HorizontalParallax/HorizontalParallax";
import { ParallaxProvider } from "react-scroll-parallax";

const HorizontalParallax: NextPage = () => {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <HorizontalParallaxPage />
    </ParallaxProvider>
  );
};

export default HorizontalParallax;
