import react from "react";
import  sub1  from "../assets/sub1.jpg";

import {Container, Row, Col} from "react-bootstrap";
export default function PlaceCard(){
    return(
        <div>
          <Container>
           <Row >
            <Col sm={1} > 
              <img
               style={{width:"80px", height:"60px"}}
               src={sub1} 
               alt=""
              />
            </Col>
            <Col sm={2} > 
              <h3 style={{fontSize:20}}>subject English </h3>
              <h3 style={{fontSize:20}}>subject Hindi </h3>
            
            </Col>
           </Row>
         

          </Container>
          
        </div>
    )
}
