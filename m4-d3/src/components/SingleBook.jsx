import books from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BookList from "./BookList";
import Button from 'react-bootstrap/Button'

const SingleBook = ({book}) =>{

    return (
    <div>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img}/>
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
    );
}

export default SingleBook;