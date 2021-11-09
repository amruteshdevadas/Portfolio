import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { GoMarkGithub } from "react-icons/go";
import Button from "@restart/ui/esm/Button";
import { FaLinkedinIn } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
function NavBar() {
  return (
    <Container fluid>
      <motion.div
        initial={{ opacity: 0, y: "-100vw" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Portfolio</Navbar.Brand>
          <Navbar.Toggle>
            <BsThreeDotsVertical />
          </Navbar.Toggle>

          <Navbar.Collapse>
            <Nav className="navStyle">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#project">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button
                target="_blank"
                className="btn btn-primary btn-floating m-1 p-1"
                size="lg"
                href="http://www.linkedin.com/in/amrutesh-devadas"
              >
                <FaLinkedinIn />
              </Button>
              <Button
                target="_blank"
                size="lg"
                className="btn btn-dark btn-floating m-1 p-1 "
                href="https://github.com/amruteshdevadas"
              >
                <GoMarkGithub />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </motion.div>
    </Container>
  );
}

export default NavBar;
