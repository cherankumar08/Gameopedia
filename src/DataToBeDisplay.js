import React, { useEffect, useState } from "react";
import axios from "axios";

const DataToBeDisplay = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
        );
        setDeals(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const copyToClipboard = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="text-center text-white mt-5">Today's Deals</h1>
          <div className="d-flex flex-wrap justify-content-around">
            {deals.map((deal) => (
              <div className="border-shadow my-5 text-cenetr">
                <li key={deal.dealID}>
                  <div>
                    <img
                      src={deal.thumb}
                      alt="image Not loaded Successfully"
                      className="img-banner"
                    />
                  </div>
                  <div className="text-dark mt-3">
                    <h5>{deal.title}</h5>
                  </div>
                  <div className="text-dark">
                    Normal Price: {deal.normalPrice}
                  </div>
                  <div className="text-dark">Sale Price: {deal.salePrice}</div>
                  <div className="text-dark">
                    You Can Save:$.
                    {typeof deal.savings === "number"
                      ? deal.savings.toFixed(2)
                      : deal.savings}
                  </div>
                  <div className="mt-4 d-flex justify-content-center">
                    <button
                      onClick={() => copyToClipboard(deal.dealID)}
                      className="btn btn-success"
                    >
                      Copy Code
                    </button>
                  </div>
                  {/* Add more deal properties as needed */}
                </li>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DataToBeDisplay;
