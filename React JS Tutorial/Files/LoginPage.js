import React, { useState } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom"
import axios from 'axios';



const LoginPage = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const navigate = useNavigate()
    
    const login=(event)=>{
        console.log(email);
        console.log(password);



        axios({
            method: 'post',
            url: 'http://65.2.153.183/web/login',
            data: {
                email: email,
                password: password,
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',


               },
        }).then((value)=>{
            if(value.data){
                console.log(value.data);
                
                if(value.data.status=="1"){ //matched
             alert("matched")
            //  history.push("/dashboard");
            navigate("/dashboard")
                }else{ //matched
                    alert("Username and password not matched")
                }
            }

        }).catch((error)=>{
            console.log(error);

        })
        
        event.preventDefault();

    }
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">Hello! Welcome Back.</h1>
                 <h5 className="font-md grey-text d-flex justify-content-center text-dark">
                    Log in With Your Data That You Entered During Your Registration.
                 </h5>
                <Row className="mt-5 ">
                
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg ">
                        <Form 
                        onSubmit={login}
                        
                        >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" value={email}
                                onChange={(event)=>{setemail(event.target.value)}}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  required type="password" placeholder="Password"
                                value={password}
                                onChange={(event)=>{setpassword(event.target.value)}}
                                />
                            </Form.Group>
                            <p className="font-small blue-text d-flex             justify-content-end pb-3">
                                 Forgot
                               <a href="#!" className="blue-text ml-1">

                                 Password?
                               </a>
                            </p>
                            

                           <Button variant="primary btn-block" value="Submit" type="submit" >
                                Login
                            </Button>
                            
                             
                             
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-dark ">Copyright © 2021 CRTD TECHNOLOGIES. All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default LoginPage;