

//import useState hook to create menu collapse state
import React, { useState,useContext } from "react";
import logo from "../../assets/user.jpg";
import { Link } from 'react-router-dom';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import {  FiLogOut } from "react-icons/fi";

import { BsFillCaretUpSquareFill, BsBookHalf, BsReverseLayoutTextWindowReverse, BsFolderSymlinkFill } from "react-icons/bs";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from "react";
import MyContext from "./Sidebar_context";
const Sidebar = (props) => {
  const Context_=useContext(MyContext)
  const matches = useMediaQuery('(max-width:800px)');    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
useEffect(()=>{
  if(matches){
    setMenuCollapse(true)
  }else{
    setMenuCollapse(false)
  }
  console.log(Context_)
},[Context_, matches])

  return (
    
    <div>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} style={{backgroundColor:"#000"}} >
          <SidebarHeader>
          {!menuCollapse&&<div class="side-menu-footer">
          <div class="avatar">
          <img src={logo} alt="user"/>
          </div>
          <div class="user-info">
          <h5>CRTD Technology</h5>
          
          
          
          
          </div>
          
          </div>}
          
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              
            </div>
          </SidebarHeader>
          <SidebarContent
          
          >
            <Menu iconShape="square"
            
            
            >
              <MenuItem  active={Context_.sidebar_tag===1?true:false} 
              
              icon={<BsFillCaretUpSquareFill/>}

              onClick={()=>{
                Context_.setsidebar_tag(1)
              }}
              
                >
                 
                <span
                style={{
                  color:Context_.sidebar_tag===1?"#000":"#fff"
                }}
                >Dashboard</span>
                <Link to="/dashboard" /> 
              </MenuItem>
              <MenuItem 
              onClick={()=>{
                Context_.setsidebar_tag(2)
              }}
              
              
              icon={<BsReverseLayoutTextWindowReverse />} active={Context_.sidebar_tag===2?true:false}>
              <span
                style={{
                  color:Context_.sidebar_tag===2?"#000":"#fff"
                }}
                >Subject</span>
               <Link to="/dashboard/sub" /> 
              </MenuItem>
              <MenuItem
              onClick={()=>{
                Context_.setsidebar_tag(3)
              }}
              icon={<BsFolderSymlinkFill />} active={Context_.sidebar_tag===3?true:false}>
              <span
                style={{
                  color:Context_.sidebar_tag===3?"#000":"#fff"
                }}
                >All Test</span> <Link to="/dashboard/Test" /></MenuItem>
              <MenuItem 
              onClick={()=>{
                Context_.setsidebar_tag(4)
              }}
              icon={<BsBookHalf />} active={Context_.sidebar_tag===4?true:false}
              
              >
              <span
                style={{
                  color:Context_.sidebar_tag===4?"#000":"#fff"
                }}
                >Exam Paper</span> <Link to="/dashboard/Exam" /></MenuItem>
              
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </div>
  );
};

export default Sidebar;