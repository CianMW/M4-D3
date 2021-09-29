import books from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SingleBook from "./SingleBook";

const BookList = () =>{
console.log(books)
    return (
        
      <Container fluid>
        <Row className="justify-content-center">
            
        {books.map(book => 
              <SingleBook book={book}   />)
        }

       
        </Row>
      </Container>
    );
}

export default BookList;