import react from "react";
import {grid, Row, Col } from "react-bootstrap";
import PlaceCard from "../Cads/PlaceCard";
import LongMenu from "./LongMenu";


const CardContainer = () =>{
    return(
        <div>
         <grid>
         
         <Row >
         <Col lg={8}>
           <Row>
           <Col md={4}>
             <PlaceCard/>
           </Col>
           <Col md={4}>
           <PlaceCard/>
           </Col>
           <Col md={4}>
           <PlaceCard/>
           </Col>
           <Col md={4}>
           <PlaceCard/>
           </Col>
           
           
         
         
         
         
         
            </Row>
           </Col>
         </Row>
         
         
         
         
         
         </grid>
        
        <LongMenu/>
        
        </div>
    )

}
export default CardContainer;
