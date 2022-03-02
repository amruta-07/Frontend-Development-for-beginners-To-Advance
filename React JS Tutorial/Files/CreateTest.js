import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import Container from 'react-bootstrap/Container';
import { Container, Row, form } from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
// import "node_modules/lib/bootstrap2-toggle.css";

export default class CreateTest extends Component {
    
  render() {
    return (
      
      <div style={{ backgroundColor:"-moz-initial"}}>
      <div class="pos-f-t" style={{marginLeft:"210px"}}>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Collapsed content</h4>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-primary">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
      <h3 style={{marginLeft:"220px",fontFamily:"revert", color:"blue"}} >Create New Test</h3>
      <form style={{marginLeft:"220px", backgroundColor:"white"}}>
      <Container >
      
      <Row  style={{marginTop:"15px"}}>
      <div class="form-row" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>
    <div class="form-group col-md-6">
      <label for="inputtext">Test Name English</label>
      <input type="text" class="form-control" id="inputtext" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputtext">Test Name Hindi</label>
      <input type="text" class="form-control" id="inputtext" />
    </div>
  </div>
    </Row>
    </Container>
 
  <Container>

  <Row style={{marginTop:"15px"}}>
  <div class="form-row" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>
  <div class="col-auto my-1" style={{width:"340px"}}>
      <label class="mr-sm-2" for="inlineFormCustomSelect" >Test Type</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
 
    <div class="col-auto my-1" style={{width:"340px"}}>
    <label class="mr-sm-2" for="inlineFormCustomSelect" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>Subject</label>
    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto my-1" style={{width:"340px"}}>
      <label class="mr-sm-2" for="inlineFormCustomSelect" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>Chapter</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
</div>
  </Row>
  </Container>
  <Container>
  <Row  style={{marginTop:"15px"}}>
  <div class="form-row">
  <div class="form-group col-md-4">
    <label for="inputtext" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>Total questions</label>
    <input type="text" class="form-control" id="inputtext" />
  </div>
  <div class="form-group col-md-4" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>
    <label for="inputtext" >Max marks</label>
    <input type="text" class="form-control" id="inputtext" />
  </div>
  <div class="form-group col-md-4" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>
  <label for="inputtext">Per Question Marks</label>
  <input type="text" class="form-control" id="inputtext" />
</div>
</div>
  </Row>
  </Container>
  <Container>
  <Row xs={6} md={4}>

  <div class="col-auto my-1" style={{width:"300px"}}>
  <label class="mr-sm-2" for="inlineFormCustomSelect" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>Test Level</label>
  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
  

</Row>
</Container>

<Container>

  <Row style={{marginTop:"21px"}}>
  <div class="form-row">
  <div class="col-auto my-1" style={{width:"400px"}}>
      <label class="mr-sm-2" for="inlineFormCustomSelect" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>State</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  <div class="col-auto my-1" style={{width:"400px"}}>
      <label class="mr-sm-2" for="inlineFormCustomSelect" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>District</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
 
    <div class="col-auto my-1" style={{width:"400px"}}>
    <label class="mr-sm-2" for="inlineFormCustomSelect" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>block</label>
    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto my-1" style={{width:"400px"}}>
      <label class="mr-sm-2" for="inlineFormCustomSelect" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>Village</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
</div>
  </Row>
  </Container>
  <Container >
  <Row style={{marginTop:"21px"}}>

  <div class="form-row" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>
  <div class="form-group col-md-6">
    <label for="inputtext">Test description (Eng)</label>
    <input type="text" class="form-control" id="inputtext" />
  </div>
  <div class="form-group col-md-6">
    <label for="inputtext">Test description (Hin)</label>
    <input type="text" class="form-control" id="inputtext" />
  </div>
  </div>
 </Row>
 </Container>
 <Container>
 <Row  style={{marginTop:"21px", fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>
 

  <div class="form-row" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>
  <div class="form-group col-md-6">
    <label for="date">Expire Date</label>
    <input type="date" class="form-control" id="inputtext" />
  </div>
  <div class="form-group col-md-6">
    <label for="appt">Attempt time</label>
    <input type="time" class="form-control" id="appt" />
  </div>
  </div>
  </Row>
 </Container>
 
 <Container>
 <Row class=" col-md-12">
 <div class="custom-control custom-switch " style={{marginLeft:"30px",
marginTop:"40px"}}>
  <input type="checkbox" class="custom-control-input" id="customSwitches"/>
  <label class="custom-control-label" for="customSwitches" style={{fontSize:16, fontFamily:"revert", fontWeight:"bold"}}>Test status</label>
</div>
</Row>
 </Container>

 
  
 


  
  

    </form>
      
      
      </div>
    )
  }
}
