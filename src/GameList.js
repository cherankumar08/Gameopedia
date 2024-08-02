// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const GameList = () => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://api.rawg.io/api/games", {
//           params: {
//             key: "0ab1114149144008a63cbcbacc39a4f0",
//           },
//         });
//         setGames(response.data.results);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div>
//           {games.map((game, index) => (
//             <div key={index}>
//               <div className="card gameCard">
//                 <img
//                   className="card-img-top"
//                   src={game.background_image}
//                   alt="Card image cap"
//                 />
//                 <div className="card-body">
//                   <p className="card-text">{game.name}</p>
//                   <p className="card-text">{game.name}</p>
//                 </div>
//               </div>
//               {console.log(game)}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GameList;

// {/* <div>
//                 <img
//                   src={game.background_image}
//                   alt="image Not loaded Successfully"
//                 />
//               {game.name}
//               </div> */}
