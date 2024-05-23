import { NextPage } from "next";
import Home from "../components/screens/Home/Home";
import { ParallaxProvider } from "react-scroll-parallax";

const HomePage: NextPage = () => {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Home />
    </ParallaxProvider>
  );
};

export default HomePage;
