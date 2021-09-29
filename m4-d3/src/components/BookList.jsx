import books from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SingleBook from "./SingleBook";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class BookList extends Component {
  state = {
    BookSearch: "",
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                Search for a book
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              placeholder="Book Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) =>
                this.setState({ BookSearch: e.currentTarget.value })
              }
              value={this.state.BookSearch}
            />
          </InputGroup>
        </Row>
        <Row className="justify-content-center">
          {books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.BookSearch.toLocaleLowerCase())
            )
            .map((b) => (
              <SingleBook book={b} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
