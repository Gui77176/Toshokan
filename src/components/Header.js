import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const Header = () => {
    return (
        <div>
            <Navbar bg="danger" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Toshokan</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Accueil</Nav.Link>
        <Nav.Link href="#action2">Shonen</Nav.Link>
        <Nav.Link href="#action2">Shojo</Nav.Link>
        <Nav.Link href="#action2">Seinen</Nav.Link>
        <Nav.Link href="#action2">Humour</Nav.Link>
        
          
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder=""
          className="me-2"
          aria-label=""
        />
        <Button variant="outline-success">Rechercher</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
