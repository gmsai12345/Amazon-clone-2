import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ImageScroller from "react-image-scroller";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useNavigate } from "react-router-dom";
export default function Navbar1() {
  function LoginLayout() {
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `./Signin/Signin`; 
      navigate(path);
    }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <img
                  src="https://www.designbyte.org/images/consistency/amazon_logo-nav.png"
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="#action2">
                {" "}
                <div>
                  {" "}
                  <select id="cars" name="cars">
                    <option value="volvo">All</option>
                    <option value="saab">Alexa skills</option>
                    <option value="fiat">Amazon devices</option>
                    <option value="audi">Amazon fashion</option>
                    <option value="fiat">Amazon devices</option>
                    <option value="fiat">Amazon fresh</option>
                    <option value="fiat">Amazon Pharmacy</option>
                    <option value="fiat">Appliances</option>
                    <option value="fiat">Apps and games</option>
                    <option value="fiat">Baby</option>
                    <option value="fiat">Beauty</option>
                  </select>
                </div>
                <div>
                  <form>
                    <input type="text" id="fname" name="fname" />
                  </form>
                </div>
                <SearchIcon />
              </Nav.Link>

              <NavDropdown title="EN" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Hindi</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Tamil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <span>
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/all-in-one-country-flag-2/256/India-flag.png"
                      alt=""
                    />
                    You are shopping on Amazon.in
                  </span>
                  <span>Change your country/region</span>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
              <Nav.Link>
                <span>Hello,sign in</span>
                <span>Accounts and Lists</span>
                <div>
                  <span>
                    <button type="submit" onClick = {routeChange}>Sign in</button>
                  </span>
                  <span>
                    <p>New customer?</p>
                    <p>Start here</p>
                  </span>
                </div>
                <div>
                  {" "}
                  <span>Your lists</span>
                  <span>create a wish list</span>
                  <span>Wish from any website</span>
                  <span>Baby wishlist</span>
                  <span>Discover your style</span>
                  <span>Explore Showroom</span>
                </div>
                <div>
                  <div>
                    {" "}
                    <span>Your account</span>
                    <span>Your account</span>
                    <span>Your orders</span>
                    <span>Your wishlist</span>
                    <span>Your recomendations</span>
                    <span>Your prime membership</span>
                    <span>Your prime video</span>
                    <span>Your Subscribe and save items</span>
                    <span>Memberships ans subscriptions</span>
                    <span>Your Amazon Buisness account</span>
                    <span>Your seller account</span>
                    <span>Manage your contenr and devices</span>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link>
                <span>Returns</span>
                <span>& Orders</span>
              </Nav.Link>
              <ShoppingCartIcon />
            </Nav>

            <span>
              <p>Sell</p>
              <p>Best Sellers</p>
              <p>Mobiles</p>
              <p>Today's deals</p>
              <p>Customer Service</p>
              <p>Electronics</p>
              <p>Prime</p>
              <p>Home & Kitchen</p>
              <p>Fashion</p>
              <p>New Releases</p>
              <p>Amazon Pay</p>
              <p>Books</p>
              <p>Computers</p>
              <p>Coupons</p>
              <p>Sports,Fitness and Outdoors</p>
            </span>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ImageScroller>
        <img src="1.jpg" alt="First" />
        <img src="2.jpg" alt="Second" />
        <img src="3.jpg" alt="Third" />
        <img src="4.jpg" alt="Fourth" />
        <img src="5.jpg" alt="Fifth" />
        <img src="6jpg" alt="Fifth" />
        <img src="7.jpg" alt="Fifth" />
      </ImageScroller>
    </div>
  );
}
