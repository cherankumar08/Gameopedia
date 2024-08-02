import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../todayDeals/Loading";

const GameDetailsPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.rawg.io/api/games", {
          params: {
            key: "0ab1114149144008a63cbcbacc39a4f0",
          },
        });
        // console.log(response);
        setGames(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const { genres } = games[0];
  // const { platforms } = games[0];
  // console.log(genres[0].name);
  // console.log(games);
  // const {slug} = game.genres;

  return (
    <div className="mt-5">
      {/* <h1 className="text-center text-white my-3">Popular Picks</h1> */}
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="row d-flex">
          {games
            .filter((game, index) => index < 1)
            .map((game, index) => (
              <div key={index} className="row row-cols-2">
                <div className="col-6 col-xxl-1 ms-5 mt-5 Details-Banner">
                  <div className="GamePoster">
                    <img
                      className="Details-Banner"
                      src={game.background_image}
                      alt="Card"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 ms-5 d-block mt-5">
                  <p className="text-white fs-1">{game.name}</p>
                  <p className="text-white ">{game.rating}</p>
                  <div className="StarRating">
                    {/* <FontAwesomeIcon icon="fa-regular fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" /> */}
                  </div>
                  <p className="text-white ">{game.name}</p>
                  <h4 className="text-white">People's View</h4>
                  <table
                    class="table table-striped bg-transparent"
                    varient="bg-dark"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Count</th>
                        <th scope="col">Percent</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{game.ratings[0].title.toUpperCase()}</td>
                        <td>{game.ratings[0].count}</td>
                        <td>{game.ratings[0].percent}</td>
                      </tr>
                      <tr>
                        <td>{game.ratings[1].title.toUpperCase()}</td>
                        <td>{game.ratings[1].count}</td>
                        <td>{game.ratings[1].percent}</td>
                      </tr>
                      <tr>
                        <td>{game.ratings[2].title.toUpperCase()}</td>
                        <td>{game.ratings[2].count}</td>
                        <td>{game.ratings[2].percent}</td>
                      </tr>
                      <tr>
                        <td>{game.ratings[3].title.toUpperCase()}</td>
                        <td>{game.ratings[3].count}</td>
                        <td>{game.ratings[3].percent}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default GameDetailsPage;
