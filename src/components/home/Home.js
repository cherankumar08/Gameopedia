import React from "react";
import NavbarGame from "./Navbar";
import Slider from "./Slider";
import FeaturesMain from "../features/FeaturesMain";
import IntroBanner from "../introBanner/IntroBanner";
import TodaysDeals from "../todayDeals/TodaysDeals";
import Footer from "../navigation/Footer";
import { Routes , Route} from "react-router-dom";
import DataToBeDisplay from "../../DataToBeDisplay";

const home = () => {
  return (
    <div>
      <NavbarGame />
      <Slider />
      <FeaturesMain />
      <IntroBanner />
      <Routes>
        <Route path='/' element={<TodaysDeals />}/>
        <Route path='/today-offers' element={<DataToBeDisplay/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default home;
