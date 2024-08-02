import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="mt-5">
        <div className="">
          <Col
            sm={4}
            xxl={5}
            className="me-5 d-flex justify-content-end border-2 border-check"
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button>Search</Button>
            </Form>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default SearchBox;
