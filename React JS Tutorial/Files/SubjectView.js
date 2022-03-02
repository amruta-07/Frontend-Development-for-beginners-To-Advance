// import { color, textAlign } from '@mui/system'
import React, { Component } from 'react'
import { BsPlusCircleFill } from "react-icons/bs";
import { Button, Container, Row, Col, Form, Modal, Card } from 'react-bootstrap';
import subimg from '../assets/sub1.jpg';
import { Grid } from '@mui/material';
import CardContainer from './CardContainer';
import LongMenu from './LongMenu';
// import Card from './SubjectView';
// import Card from 'react-bootstrap/Card';

export default class SubjectView extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(args) {
    super(args)
    this.state = {
      modal_visible: false,
      chapter_name_Eng: "",
      chapter_name_Hin: "",
      chapter_image: ""

    }


  }
  onFileChange = event => {

    this.setState({
      chapter_image: URL.createObjectURL(event.target.files[0])
    })



  };


  render() {
    const mystyle = {

      color: "black",
      fontFamily: "arial",
      fontsize: "1px",
      padding: "-5px",
      marginBottom: "-2%"
    }


    return (
      <div
        style={{
          marginLeft: 214,
          padding: 10
        }}
      >
        <h3 style={mystyle}>Subject English</h3>
        <div className='mt-5 '  >

          <Card style={{ width: '22rem' }} border='dark' >
            <Row>
              <Col md={5} lg={5} style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
              >
                <Card.Img as='img' className='img-responsive center-block' style={{
                  width: 100,
                  height: 100,
                  margin: "auto",
                  display: "block",


                }} src={subimg} />
              </Col>
              <Col className='p-1'>
                <Card.Body className='no-gutters' style={{
                  padding: 0
                }} >
                  <Card.Text as='h6' >Subject Name (English)</Card.Text>
                  <Card.Text >
                    Some quick example text .
                  </Card.Text>

                  <Card.Text as='h6' >Subject Name (hindi)</Card.Text>
                  <Card.Text >
                    Some quick example text
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>



        </div>
        <h2 style={{ color: "blue", fontSize: "30px", marginTop: "5%" }}> Chapters</h2>
        <div>
          <span onClick={() => {
            this.setState({
              modal_visible: true
            })
          }}>
            <BsPlusCircleFill style={{ color: '#1b0ee5', fontSize: '54px', padding: '5px', }} />

          </span>
          <Button onClick={() => {
            this.setState({
              modal_visible: true
            })
          }} style={{ marginTop: "10px" }}>Add Chapters</Button>

        </div>

        <Modal show={this.state.modal_visible} onHide={() => {
          this.setState({
            modal_visible: false
          })
        }}>
          <Modal.Header> Create new Chapter</Modal.Header>

          <Form style={{ padding: 10 }}

            onSubmit={(e) => {
              e.preventDefault(); //prevent page refresh after submit form
              // this.oncreate_subject()
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Chapter name(English) </Form.Label>
              <Form.Control type="text"
                value={this.state.chapter_name_Eng}
                onChange={(event) => {
                  this.setState({
                    chapter_name_Eng: event.target.value
                  })
                }}
                placeholder="Chapter name(English)" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Chapter name(Hindi)</Form.Label>
              <Form.Control type="txt"
                value={this.state.chapter_name_Hin}
                onChange={(event) => {
                  this.setState({
                    chapter_name_Hin: event.target.value
                  })
                }}
                placeholder="Chapter name(Hindi)" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Chapter Image</Form.Label>
              <Form.Control type="file" placeholder=""
                onChange={(event) => {
                  this.onFileChange(event)
                }}

                required />
            </Form.Group>

            <Button variant="primary" type="submit"  >
              Create
            </Button>
            <Button variant="outline-dark" style={{ marginLeft: 20 }} onClick={() => {
              this.setState({
                modal_visible: false
              })

            }}  >
              Cancel
            </Button>
          </Form>

        </Modal>

        <div
          style={{
            width: "60%"
          }} 
        >
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4 mt-2">
              <Card>
                <Row >
                
                  <Col md={5} lg={5} style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  >
                    <Card.Img as='img' className='img-responsive center-block ' style={{
                      width: 100,
                      height: 100,
                      margin: "auto",
                      display: "block",
                      
                      

                    }} src={subimg} />
                  </Col>
                  <Col className='p-1'>
                    <Card.Body className='no-gutters' style={{
                      padding: 0
                    }} >
                      <Card.Text as='h6' >Subject Name (English)</Card.Text>
                      <Card.Text >
                        Some quick example text .
                      </Card.Text>

                      <Card.Text as='h6' >Subject Name (hindi)</Card.Text>
                      <Card.Text>
                        Some quick example text
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <LongMenu/>
              </Card>
            </div>
            <div class="col mb-4 mt-2">
              <Card border='dark'>
                <Row>
                  <Col md={5} lg={5} style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  >
                    <Card.Img as='img' className='img-responsive center-block ' style={{
                      width: 100,
                      height: 100,
                      margin: "auto",
                      display: "block",


                    }} src={subimg} />
                  </Col>
                  <Col className='p-1'>
                    <Card.Body className='no-gutters' style={{
                      padding: 0
                    }} >
                      <Card.Text as='h6' >Subject Name (English)</Card.Text>
                      <Card.Text >
                        Some quick example text .
                      </Card.Text>

                      <Card.Text as='h6' >Subject Name (hindi)</Card.Text>
                      <Card.Text >
                        Some quick example text
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <LongMenu/>
              </Card>
            </div>
            <div class="col mb-4 mt-2">
              <Card >
                <Row >
                  <Col md={5} lg={5} style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  >
                    <Card.Img as='img' className='img-responsive center-block ' style={{
                      width: 100,
                      height: 100,
                      margin: "auto",
                      display: "block",


                    }} src={subimg} />
                  </Col>
                  <Col className='p-1'>
                    <Card.Body className='no-gutters' style={{
                      padding: 0
                    }} >
                      <Card.Text as='h6'>Subject Name (English)</Card.Text>
                      <Card.Text >
                        Some quick example text .
                      </Card.Text>

                      <Card.Text as='h6' >Subject Name (hindi)</Card.Text>
                      <Card.Text >
                        Some quick example text
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <LongMenu/>
              </Card>
              
            </div>

          </div>



        </div>












      </div>


    )
  }
}
