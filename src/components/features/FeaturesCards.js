import React from "react";
import feature1 from "../../static/assets/images/feature1.jpg";
import feature2 from "../../static/assets/images/feature2.jpg";
import feature3 from "../../static/assets/images/feature3.jpg";
import Buttons from "./Buttons";

const FeaturesCards = () => {
  return (
    <div className="card-group">
      <div className="card" style={{ position: "relative" }}>
        <img
          className="card-img-top-features"
          src={feature1}
          alt="Card image cap"
        />
        <p className="card-text p-5 p-sm-5 fs-6">
          Upgrade your gaming experience with our top-of-the-line gear designed
          to take your performance to the next level. Whether you're seeking
          lightning-fast response times or immersive audio quality, we offer a
          wide selection of keyboards, headsets, mice, and more to suit every
          gamer's needs. Ensuring comfort and precision during even the most
          intense gaming sessions.
          {/* <Buttons/> */}
        </p>
      </div>

      <div className="card">
        <img
          className="card-img-top-features"
          src={feature2}
          alt="Card image cap"
        />
        <p className="card-text p-5">
          Discover the ultimate gaming experience with our selection of top-tier
          peripherals, meticulously designed to provide unparalleled comfort and
          performance. From ergonomic keyboards that offer precise control to
          immersive headsets delivering crystal-clear audio, our gear is
          engineered to enhance your gaming sessions.
          {/* <Buttons/> */}
        </p>
      </div>
      <div className="card">
        <img
          className="card-img-top-features"
          src={feature3}
          alt="Card image cap"
        />
        <p className="card-text p-5">
          Don't miss out on our limited-time offer! Snag discounted gaming
          accessories now and take your setup to the next level without breaking
          the bank. With these savings, you can dominate the competition and
          emerge victorious while enjoying top-quality gear at unbeatable
          prices.
        </p>
      </div>
    </div>
  );
};

export default FeaturesCards;
