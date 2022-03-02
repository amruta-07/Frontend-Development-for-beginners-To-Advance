import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';

import { ImSearch } from "react-icons/im";
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Pagination from 'react-responsive-pagination';

import { Button } from 'react-bootstrap'
import { BsPlusCircleFill } from "react-icons/bs";
// import { Link } from 'react-router-dom'; 


const options = [
  'Edit',
  'Delete',
  'View',

];

const ITEM_HEIGHT = 48;

export class Test extends Component {
  state = {
    anchorEl: null,
    open: false,
    test_data: [
      // {
      //   id: 1,
      //   test_name: "name",
      //   test_type: "vilage",
      //   test_level: "easy",
      //   subject_name: "name",
      //   status: 1
      // },
      // {
      //   id: 2,
      //   test_name: "name",
      //   test_type: "vilage",
      //   test_level: "easy",
      //   subject_name: "name",
      //   status: 0
      // },
      // {
      //   id: 3,
      //   test_name: "name",
      //   test_type: "vilage",
      //   test_level: "easy",
      //   subject_name: "name",
      //   status: 1
      // },
    ],
    test_data_copy:[],
    totalPages:0,
    currentPage:1,
    start_index:0,
    end_index:9,

  }


componentDidMount(){
  
  var test=[]
  for(let i =0 ;i<23;i++){
    
    var obj={
      id: i+1,
      test_name: "name",
      test_type: "vilage",
      test_level: "easy",
      subject_name: "name",
      status: 1
    }
    test.push(obj)
  }
  const test_data=test
  this.setState({
    totalPages:Math.ceil(test_data.length/10),
    test_data:test.slice(this.state.start_index,this.state.end_index+1),
    test_data_copy:test,


  })
  


  

}


  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
      open: true
    })
  };
  handleClose = (event) => {
    this.setState({
      anchorEl: null,
      open: false
    })
  };
  handlePageChange(requestpageindex) {


    var start_index=this.state.start_index
    var end_index=this.state.end_index
    if(requestpageindex!==this.state.currentPage){ // here we check if requested page index not the current page index
      if(requestpageindex>this.state.currentPage){
        start_index+=10
        end_index+=10
  
      }else{
        start_index-=10
        start_index=start_index<0?0:start_index
        end_index-=10
      }
  

      const new_test_data=this.state.test_data_copy.slice(start_index,end_index+1)
      this.setState({ 
        currentPage: requestpageindex,
        test_data:new_test_data,
        start_index:start_index,
        end_index:end_index,
  
  
       })
    }

   

  };
  handleTest() {
    this.setState({ show: !this.state.show })
  }

  Menu_component = () => {

    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={this.state.open ? 'long-menu' : undefined}
          aria-expanded={this.state.open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={(e) => {
            this.handleClick(e)
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={(e) => {
            this.handleClose(e)
          }}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={(e) => {
              this.handleClose(e)
            }}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
  render() {

    return (
      <div style={{ backgroundColor: "white", marginLeft: "220px", padding: "2%" }} responsive="lg">

        <h3 >All Test</h3>
        <div class="input-group mt-5" >
          <div class="form-outline" style={{ fontSize: 19, width: '350px', height: '51px', }} >
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              variant="standard"


              fullWidth={true}
            />
          </div>
          <button type="button" class="btn btn-primary" style={{ fontSize: 21 }}>
            <ImSearch />
          </button>
        </div>


        <Table size="lg" responsive="lg" style={{ height: '10rem', width: '70rem', marginTop: '31px' }}>
          <thead class="font-weight-bold">
            <tr style={{ fontSize: 14, borderBottom: "#ccc" }}>
              <th>Sr No.</th>
              <th>Test Name</th>
              <th>Test Type</th>
              <th>Difficulty</th>
              <th>Subject Name</th>
              <th>Status</th>
              <th>Options</th>

            </tr>
          </thead>
          <tbody style={{ fontSize: 17 }}>
            {
              this.state.test_data.map((item, index) => {
                return (
                  <tr
                    key={item.id}
                  >
                    <td>{item.id} </td>
                    <td>{item.test_name} </td>
                    <td>{item.test_type} </td>
                    <td>{item.test_level} </td>
                    <td>{item.subject_name} </td>
                    <td>
                      {item.status === 1 && <stack>
                        <Chip label="Completed" color="success" variant="outlined"

                        />
                      </stack>}
                      {item.status === 0 && <stack>
                        <Chip label="Expired" color="warning" variant="outlined"

                        />
                      </stack>}
                    </td>


                    <td> {this.Menu_component()}  </td>
                  </tr>
                )
              })
            }


          </tbody>
        </Table>
      
          <BsPlusCircleFill onClick={() => window.open("/CreateTest")} style={{ color: '#1b0ee5', fontSize: '41px', padding: '3px', marginTop: '4px' }} />

     
        <Button onClick={() => window.open("/dashboard/CreateTest")}>Create Test</Button>    
            <Pagination style={{marginTop:'4px'}}
          total={this.state.totalPages}
          current={this.state.currentPage}
          onPageChange={page => this.handlePageChange(page)}
        />
        


      </div>

    );
  }
}

export default Test;
