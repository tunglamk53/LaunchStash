import React from "react";
import UserContext from '../contexts/UserContext';
import {Link} from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

const SignUp = () => {
    const { setLoggedIn } = React.useContext(UserContext)

    const [username, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [message, setMessage] = React.useState('')

    const submit = event => {
        event.preventDefault()

        if(!username || !email || !password) {
          setMessage('Fields can not be empty !')
        } else {
          fetch(`/user/signup`, {
              method: 'POST',
              body: JSON.stringify({ username, email, password }),
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(res => res.json())
          .then(data => {
              if(data.message) {
                  console.log(data.message)
                  setMessage(data.message)
              }
              if(data.token && data.email) {
                  localStorage.setItem("myToken", data.token) //Set Token
                  localStorage.setItem("myEmail", data.email)
                  setLoggedIn(data.token)
              }
          })
        }
    }

    return (
      <>
        <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
        </div>

        <Row className="justify-content-center mb--6 mt-4">
            <h4 className="text-white font-italic">It's easy to</h4><h4 className="text-success font-italic ml-1">Create Account</h4><h4 className="text-white font-italic ml-1">with any email</h4>
        </Row>
        <Container className="pt-lg-7">
            <Row className="justify-content-center">
            <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-2">
                    <div className="text-muted text-center mb-3">
                        {/* <small>Sign up with</small> */}
                        <h4 className="text-primary font-weight-bold font-italic">Sign Up</h4>
                    </div>
                    {/* <div className="text-center">
                    <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <span className="btn-inner--icon">
                        <img
                            alt="..."
                            src={require("../assets/img/icons/common/facebook.svg")}
                        />
                        </span>
                        <span className="btn-inner--text">Facebook</span>
                    </Button>
                    <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <span className="btn-inner--icon">
                        <img
                            alt="..."
                            src={require("../assets/img/icons/common/google.svg")}
                        />
                        </span>
                        <span className="btn-inner--text">Google</span>
                    </Button>
                    </div> */}
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                        <small>Sign Up with credentials</small>
                    </div>
                    <Form onSubmit={submit}>
                    <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="ni ni-hat-3" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            className="text-blue font-weight-700"
                            placeholder="Name" 
                            type="text" 
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                        />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="ni ni-email-83" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            className="text-blue font-weight-700"
                            placeholder="Email" 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            className="text-blue font-weight-700"
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        </InputGroup>
                    </FormGroup>
                    <div className="font-italic">
                        <p className='small text-danger font-weight-700'>{message}</p>
                    </div>
                    <Row className="my-4">
                        <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                            className="custom-control-input"
                            id="customCheckRegister"
                            type="checkbox"
                            />
                            <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister"
                            >
                            <span>
                                I agree with the{" "}
                                <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                >
                                Privacy Policy
                                </a>
                            </span>
                            </label>
                        </div>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <Button
                        className="mt-4"
                        color="primary"
                        type="submit"
                        >
                        <i className="fa fa-user-circle mr-2" />
                        Create account
                        </Button>
                    </div>
                    </Form>
                </CardBody>
                </Card>
                <Row className="mt-3">
                <Col className="text-right">
                    <Link 
                    className="small text-light" 
                    to={"/login"}>
                        <p className="text-white font-weight-bold">Log In with your account</p>
                    </Link>    
                </Col>
                </Row>
            </Col>
            </Row>
        </Container>
        </section>
      </>
    );
}


export default SignUp;
