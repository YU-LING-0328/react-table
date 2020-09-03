import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchForm() {
  return (
    <Form>
      <Form.Row>
        <Form.Group controlId="DbCategory_Select">
          <Form.Label>
            <span className="font-color-red">＊</span>類別
          </Form.Label>
          <Form.Control as="select">
            <option>測試機(T)</option>
            <option>正式機(F)</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="DbType_Select">
          <Form.Label>
            <span className="font-color-red">＊</span>種類
          </Form.Label>
          <Form.Control as="select">
            <option>EAPI</option>
            <option>CoreAPI</option>
            <option>ALM</option>
          </Form.Control>
        </Form.Group>

        <Col xs={2}>
          <span className="font-color-red">＊</span>MongoDB Collection Name
          <Form.Control />
        </Col>
        <Col xs={2}>
          起始日期
          <Form.Control />
        </Col>
        <Col xs={2}>
          結束日期
          <Form.Control />
        </Col>
      </Form.Row>
      條件
      <Form.Row>
        <Col xs={2}>
          <span className="font-color-red">＊</span>ActionData
          <Form.Control />
        </Col>
        <Col xs={2}>
          HttpCode
          <Form.Control />
        </Col>
        <Col xs={2}>
          rCode
          <Form.Control />
        </Col>
        <Col xs={2}>
          SiteNames
          <Form.Control />
        </Col>
      </Form.Row>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
