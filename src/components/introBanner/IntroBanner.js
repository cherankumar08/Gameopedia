import React from "react";
import IntroBannerImg from "../../static/assets/images/mainBanner.jpg";

const IntroBanner = () => {
  return (
    <div className="banner-container">
      <img src={IntroBannerImg} alt="" className="banner-image" />
      <div className="banner-text d-xs-none d-sm-none d-md-none d-xxl-block">
        <h4 className="fw-bold text-success ">Gaming is not a crime!!!</h4>
        <p>
          GameOphedia offers a curated selection of games and accessories,
          personalized guidance from experts, and a vibrant community for gamers
          to connect and share experiences. With exclusive offers and rewards,
          GameOphedia is your ultimate destination for an unforgettable gaming
          journey
        </p>
        {/* <button className="btn btn-outline-success">Know More</button> */}
      </div>
    </div>
  );
};

export default IntroBanner;
