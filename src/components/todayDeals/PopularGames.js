import React, { useState, useEffect } from "react";
import {
  Modal,
  Row,
  Col,
  Image,
  Table,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import axios from "axios";
import Loading from "./Loading";

const GameTile = ({ game }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div key={game.id}>
      <div className="card gameCard mx-1 my-5">
        {/* Image */}
        <img
          className="card-img-top"
          src={game.background_image}
          alt="Card image cap"
        />
        {/* Game Details */}
        <div className="card-body card-dark">
          <div className="d-flex justify-content-between">
            <p className="game-Title">{game.name}</p>
            <span>
              <i className="bi bi-star-half text-warning"></i>
              {game.rating}
            </span>
          </div>
          <div className="d-flex">
            <p className="extra-informations me-3">{game.genres[0].name}</p>
            <p className="extra-informations">
              {game.platforms[0].platform.slug}
            </p>
          </div>
          <p className="extra-informations">{game.tags[0].name}</p>
          <div className="d-flex">
            <button
              className="btn details-button text-center"
              onClick={() => setShowModal(true)}
            >
              View Details
            </button>
            {/* Modal For this Tile */}
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              size="lg"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>{game.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col>
                    <Image src={game.background_image} fluid rounded />
                  </Col>
                  <Col>
                    <p className="text-dark fs-1">{game.name}</p>
                    <div className="d-flex">
                      <span>
                        <i className="bi bi-star-half text-warning"></i>
                        {game.rating}
                      </span>
                      <p className="extra-informations mx-1">
                        {game.genres[0].name}
                      </p>
                      <p className="extra-informations mx-1">
                        {game.platforms[0].platform.slug}
                      </p>
                      <p className="extra-informations mx-1">
                        {game.tags[0].name}
                      </p>
                    </div>
                  </Col>
                </Row>
                <h4>Genres</h4>
                <div className="d-flex">
                  {game.genres.map((genre) => (
                    <div
                      key={genre.id}
                      className="d-flex flex-column align-items-center"
                    >
                      <Image
                        src={genre.image_background}
                        className="mb-2 mx-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <p>{genre.name}</p>
                    </div>
                  ))}
                </div>
                <h4>Platforms</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th className="text-dark">Name</th>
                      <th className="text-dark">Minimum Requirements</th>
                      <th className="text-dark">Recommended Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {game.platforms.map((platformInfo, index) => (
                      <tr key={index}>
                        <td className="text-dark">
                          {platformInfo.platform.name}
                        </td>
                        <td className="text-dark">
                          {platformInfo.requirements_en &&
                          platformInfo.requirements_en.minimum ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: platformInfo.requirements_en.minimum,
                              }}
                            ></div>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td className="text-dark">
                          {platformInfo.requirements_en &&
                          platformInfo.requirements_en.recommended ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  platformInfo.requirements_en.recommended,
                              }}
                            ></div>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <h4>Screenshots</h4>
                <Row>
                  {game.short_screenshots.map((screenshot) => (
                    <Col
                      key={screenshot.id}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-3"
                    >
                      <Image src={screenshot.image} fluid />
                    </Col>
                  ))}
                </Row>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allGames = [];
        let page = 1;
        // Fetch pages until we have collected 100 games or there are no more pages
        while (allGames.length < 150) {
          const response = await axios.get(
            `https://api.rawg.io/api/games?key=0ab1114149144008a63cbcbacc39a4f0&page=${page}`
          );
          const data = response.data;
          allGames = allGames.concat(data.results);
          if (!data.next) break; // No more pages
          page++;
        }
        // Take only the first 100 games
        setGames(allGames.slice(0, 100));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter games based on searchQuery
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center text-white my-3">Game List </h1>
      <Form className="mb-3">
        <div className=" d-flex justify-content-end me-5">
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search....."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
              />
              <Button variant="outline-secondary" className="btn-search">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form.Group>
        </div>
      </Form>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-around">
          {filteredGames.map((game, index) => (
            <GameTile key={index} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GameList;
