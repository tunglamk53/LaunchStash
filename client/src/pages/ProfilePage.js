import React from "react";
import UserContext from '../contexts/UserContext'
import Loading from './components/Loading'

import { Button, Card, Container, Row, Col } from "reactstrap";

const ProfilePage = () => {
  const [ user, setUser ] = React.useState(null)
  const { setLoggedIn } = React.useContext(UserContext)

  React.useEffect(() => {
    const fetchUser = async() => {
        const result = await fetch(
            `/user/profile/${localStorage.getItem('myEmail')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token-backend': localStorage.getItem('myToken'),
                    'email-backend': localStorage.getItem('myEmail')
                }
            });
        const body = await result.json()
        setUser(body)

        if(body.message === "Invalid Token") {
            localStorage.removeItem("myToken")
            setLoggedIn(localStorage.getItem("myToken"))
        }
        console.log(body);
    }
    fetchUser();
  }, [setUser, setLoggedIn])
  
  return (
    <>
      <main className="profile-page">
        <section className="section-hero section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-primary alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../assets/profile-img.png")}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Edit
                      </Button>
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">999</span>
                        <span className="description">Checklists</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <div>
                    <i className="ni education_hat mr-2" />
                    Personal Information
                  </div>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  {user ? 
                    (
                      <>
                      
                      <h1>
                        {user.username}
                      </h1>
                      <div className="h3 mt-4">
                        <i className="fa fa-paper-plane mr-2" />
                        {user.email}
                      </div>
                      <div className="h6 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        
                      </div>
                      </>
                    ) : <Loading />
                  }
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </>
  );
}

export default ProfilePage;
