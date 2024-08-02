import React, { useEffect } from "react";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
    );
    console.log("Fetched Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const DataFetched = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <div>Fetching data, check console for results...</div>;
};

export default DataFetched;
