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
       <Card key={book.asin} className="m-3 d-flex justify-content-center" style={{ width: '20rem', height: '400px' }}>
  <Card.Img variant="top" src={book.img} className="p-4 ml-4" style={{ width: '80%', height: '250px' }}/>
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
    );
}

export default SingleBook;