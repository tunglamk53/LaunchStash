import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

const FooterBar = () => {
  
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                {/* <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip> */}
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flaunchstash.herokuapp.com%2F&amp;src=sdkpreparse"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Share us
                </UncontrolledTooltip>
                {/* <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="https://www.instagram.com/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Like us
                </UncontrolledTooltip> */}
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                    © Douglas College 2020
                    <Link to={"/about-us"}>
                        <h5 className="">CSIS 4495 Applied Research Project</h5>
                    </Link>
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink>
                        <Link to={"/feedback"} className=""><h4>Feedback</h4></Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Link to={"/about-us"} className=""><h4>About Us</h4></Link>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  
}

export default FooterBar;
