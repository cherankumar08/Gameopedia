import React, { useEffect } from "react";
// Importing the Images
import banner1 from "../../static/assets/images/banner1.jpg";
import banner2 from "../../static/assets/images/banner2.jpg";
import banner3 from "../../static/assets/images/banner3.jpg";
import banner4 from "../../static/assets/images/banner4.jpg";

const Slider = () => {
  useEffect(() => {
    // Start the carousel when the component mounts
    const carousel = new window.bootstrap.Carousel(
      document.getElementById("GameBanners"),
      {
        interval: 2000,
      }
    );

    // Stop the carousel when the component unmounts to prevent memory leaks
    return () => {
      carousel.dispose();
    };
  }, []);
  return (
    <div>
      <div
        id="GameBanners"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner3} className="BannerImage w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="BannerImage w-100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src={banner1} className="BannerImage w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner4} className="BannerImage w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#GameBanners"
          data-bs-slide="prev"
        >
          {/* <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span> */}
          {/* <span className="visually-hidden">Previous</span> */}
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#GameBanners"
          data-bs-slide="next"
        >
          {/* <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span> */}
          {/* <span className="visually-hidden">Next</span> */}
        </button>
      </div>
    </div>
  );
};

export default Slider;
