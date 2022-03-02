import React, { Component, } from 'react';
// import Sidebar from '../dashboard/sidebar';
import { Button, Modal, Form } from 'react-bootstrap';
import { BsPlusCircleFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './subject.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import CardUI from '../../Cads/CardUI';
// import { useNavigate } from "react-router-dom";


class Subjectdb extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(args) {
        super(args)
        this.state = {
            class_id: "",
            class_name: "",
            classdata: [
                {
                    class_id: 5,
                    name: "5th"
                },
                {
                    class_id: 6,
                    name: "6th"
                },
                {
                    class_id: 7,
                    name: "7th"
                },
                {
                    class_id: 8,
                    name: "8th"
                },
                {
                    class_id: 9,
                    name: "9th"
                },
                {
                    class_id: 10,
                    name: "10th"
                },
                {
                    class_id: 11,
                    name: "11th"
                },
                {
                    class_id: 12,
                    name: "12th"
                },
            ],
            board_id: "",
            board_name: "",
            boarddata: [
                {
                    board_id: 1,
                    board: "CBSE"
                },
                {
                    board_id: 2,
                    board: "ICSE"
                },
                {
                    board_id: 3,
                    board: "Maharashtra"
                },


            ],
            subject_data: [
                {
                    "subject_id": "1",
                    "subject_name_H": "डेटाबेस",
                    "subject_name_E": "Database",
                    "s_class_id": "2",
                    "board_id": "2",
                    "s_image": "https://static.javatpoint.com/reasoning/images/reasoning-home.png",
                    "created_at": "2021-07-02 15:16:11",
                    "updated_at": "2021-07-14 13:17:53",
                    "status": "1"
                },
                {
                    "subject_id": "3",
                    "subject_name_H": "गणित",
                    "subject_name_E": "math",
                    "s_class_id": "2",
                    "board_id": "2",
                    "s_image": "https://static.javatpoint.com/reasoning/images/reasoning-home.png",
                    "created_at": "2021-07-12 17:48:15",
                    "updated_at": "2021-07-14 13:18:02",
                    "status": "1"
                },

            ],

            show: false,
            subject_name_E: "",
            subject_name_H: "",
            subject_image:""



        }



    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }

    oncreate_subject=()=>{

        var new_subject={
            "subject_id": new Date(),
                    "subject_name_H": this.state.subject_name_H,
                    "subject_name_E": this.state.subject_name_E,
                    "s_class_id": "2",
                    "board_id": "2",
                    "s_image": this.state.subject_image,
                    "created_at": "2021-07-02 15:16:11",
                    "updated_at": "2021-07-14 13:17:53",
                    "status": "1"
        }
        const subjects=this.state.subject_data
        subjects.push(new_subject)
        this.setState({
            subject_data:subjects,
            subject_name_E: "",
            subject_name_H: "",
            subject_image:""
        })
        this.handleModal()


    }
    onFileChange = event => {

       this.setState({
        subject_image:URL.createObjectURL(event.target.files[0])
       })



    };


    onchange_class = (e) => {
        this.setState({
            class_name: this.state.classdata[e].name,
            class_id: this.state.classdata[e].id,

        })
    }
    onchange_board = (e) => {
        this.setState({
            board_name: this.state.boarddata[e].board,
            board_id: this.state.boarddata[e].id,

        })
    }




    render() {



        return (
            <div>
                
                <div
                    id='main'
                >
                    <header class="bg-primary" >

                        <h6 class="font-weight-bold container-fluid text-light">All Subject</h6>
                        <nav class="d-inline-flex p-2">

                            <DropdownButton id="dropdown-basic-button"
                                onSelect={(e) => {
                                    this.onchange_class(e)
                                }}
                                title={this.state.class_name === "" ? "Select class" : this.state.class_name} >
                                {
                                    this.state.classdata.map((item, index) => {
                                        return <Dropdown.Item eventKey={index} >{item.name} </Dropdown.Item>

                                    })
                                }
                            </DropdownButton>

                            <DropdownButton id="dropdown-basic-button"
                                onSelect={(e) => {
                                    this.onchange_board(e)
                                }}
                                title={this.state.board_name === "" ? "Select Board" : this.state.board_name} >
                                {
                                    this.state.boarddata.map((item, index) => {
                                        return <Dropdown.Item eventKey={index} >{item.board} </Dropdown.Item>

                                    })
                                }
                            </DropdownButton>

                            <button type="button" class="btn btn-light font-weight-bold">Apply</button>


                        </nav>

                    </header>

                    <div className="container-fluid ">
                        <div className="row">

                            {
                                this.state.subject_data.map((item, index) => {
                                    return <div className="col-md-3 mt-4" key={item.subject_id}>
                                        <CardUI

                                            imgsrc={item.s_image}
                                            eng_title={item.subject_name_E}
                                            hin_title={item.subject_name_H}

                                        />
                                    </div>
                                })
                            }
                        </div>

                    </div>
                    <div
                        style={{
                            marginTop: 20
                        }}
                    >
                        <span onClick={() => { this.handleModal() }}>
                            <BsPlusCircleFill style={{ color: '#1b0ee5', fontSize: '45px', padding: '3px', marginTop: '4px' }} />

                        </span>
                        <Button onClick={() => { this.handleModal() }}>Create Subject</Button>

                    </div>

                    <Modal show={this.state.show} onHide={() => this.handleModal()}>
                        <Modal.Header> Create new subject</Modal.Header>
                        <Form style={{ padding: 10 }}
                        
                        onSubmit={(e)=>{
                            e.preventDefault(); //prevent page refresh after submit form
                            this.oncreate_subject()
                        }}
                        >  
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>subject name(English) </Form.Label>
                                <Form.Control type="text"
                                    value={this.state.subject_name_E}
                                    onChange={(event) => {
                                        this.setState({
                                            subject_name_E: event.target.value
                                        })
                                    }}
                                    placeholder="subject name(English)" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>subject name(Hindi)</Form.Label>
                                <Form.Control type="txt"
                                    value={this.state.subject_name_H}
                                    onChange={(event) => {
                                        this.setState({
                                            subject_name_H: event.target.value
                                        })
                                    }}
                                    placeholder="subject name(Hindi)" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Subject Image</Form.Label>
                                <Form.Control type="file" placeholder=""
                                    onChange={(event)=>{
                                        this.onFileChange(event)
                                    }}

                                    required />
                            </Form.Group>

                            <Button variant="primary" type="submit"  >
                                Create
                            </Button>
                            <Button variant="outline-dark" style={{ marginLeft: 20 }} onClick={() => { this.handleModal() }}  >
                                Cancel
                            </Button>
                        </Form>


                    </Modal>
                </div>
            </div>

        )
    }
}

export default Subjectdb;
