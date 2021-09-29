import books from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BookList from "./BookList";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge"

class SingleBook extends Component {
    constructor(props){
        super(props)
    }
    state = {
       
    }
    render () {
  return (
    <div className="d-flex justify-content-center">
      <Card
        key={this.props.book.asin}
        className="m-3 d-flex justify-content-center"
        style={{ width: "20rem", height: "400px" }}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          className="p-4 ml-4"
          style={{ width: "80%", height: "250px" }}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
        );
    };
}


export default SingleBook;
