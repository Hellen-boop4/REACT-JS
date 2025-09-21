import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap styles
import { Navbar, Container, Nav, Card } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">My React App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 className="text-center mt-4">Welcome to My First React App 🚀</h1>

        {/* Cards Section */}
        <Container className="d-flex justify-content-around mt-5">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is the first card.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is the second card.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is the third card.</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;
