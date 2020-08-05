import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";


const HomePage = () => {
  
    return (
      <>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-dark">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="8">
                      <h4 className="display-5 text-white">WELCOME TO</h4>
                      <h1 className="display-3 text-white">
                        LAUNCH STASH
                      </h1>
                      <p className="lead text-white">
                        We created Launch Stash as a product launch checklist to help product team not missing anything during their product launching process by using our checklist function. Our users can also learn from various sources to prepare for different stages in launching with the useful articles and tools we research and summarize. 
                      </p>
                      <div className="">
                        <Link to={"/create-checklist"}>
                          <Button
                            className="btn-white mb-3 btn-lg mr-4"
                          >
                            <span className="btn-inner--icon mr-2 text-default">
                              <i className="fa fa-list" />
                            </span>
                            <span className="text-default font-weight-bolder">
                              Create A Checklist
                            </span>
                          </Button>
                        </Link>
                        <Link to={"/create-resource"}>
                          <Button
                            className="btn-white mb-3 btn-lg"
                          >
                            <span className="btn-inner--icon mr-2 text-default">
                              <i className="fa fa-podcast" />
                            </span>
                            <span className="text-default font-weight-bolder">
                              View Resources
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>

              <Container className="mt-6">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 h-100">
                        <CardImg 
                          variant="top" 
                          className="img-fluid floating"
                          src={require("../assets/pic2.png")} 
                        />
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase font-weight-bold">
                          PRODUCT IDEA
                          </h6>
                          {/* <p className="description mt-3">
                            A website helps user to better their
                            launching process with 2 main contents:
                          </p> */}
                          <div>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                Launch process checklist
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <Badge color="primary" pill className="mr-1">
                                Launch process useful resources
                              </Badge>
                            </div>
                          </div>
                          <Link className='btn btn-outline-primary btn-sm float-right mt-7' to={"/product-idea"}>Learn more</Link>

                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 h-100">
                        <CardImg 
                            variant="top" 
                            className="img-fluid floating"
                            src={require("../assets/pic1.png")} 
                        />
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase font-weight-bold">
                            TARGET AUDIENCES
                          </h6>
                          {/* <p className="description mt-3">
                            nghfngngfdbfdsbs
                          </p> */}
                          <div>
                            <div>
                              <Badge color="success" pill className="mr-1">
                                Start up team
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <Badge color="success" pill className="mr-1">
                                Product Owner, Product Manager
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <Badge color="success" pill className="mr-1">
                                Indie developers
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <Badge color="success" pill className="mr-1">
                                Marketer
                              </Badge>
                            </div>
                          </div>
                          <Link className='btn btn-outline-success float-right btn-sm mt-4' to={"/target-audiences"}>LEARN MORE</Link>

                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 h-100">
                        <CardImg 
                            variant="top" 
                            className="img-fluid floating"
                            src={require("../assets/pic3.png")} 
                        />
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase font-weight-bold">
                            SOLUTIONS
                          </h6>
                         
                          <div>
                            <div>
                              <Badge color="warning" pill className="mr-1">
                                Create a hub to feature all resources
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <Badge color="warning" pill className="mr-1">
                                Suggested launch process
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <Badge color="warning" pill className="mr-1">
                                Build, share and keep track the launch kits
                              </Badge>
                            </div>
                          </div>
                          <Link className='btn btn-outline-warning float-right btn-sm mt-5' to={"/solutions"}>LEARN MORE</Link>

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            </section>
          </div>
      </>
    );
  
}

export default HomePage;
