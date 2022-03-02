import React from 'react';
import LongMenu from './LongMenu';
import './card-style.css'; 

const CardUI=props=>{
  
    return(

        

        <div className="card text-center shadow">
           <div className="overflow">
             <img src={props.imgsrc} alt="image1" className="card-img-top"/>
           </div>
         
        
        <div className="card-body text-dark">
          <h4 className="card-title">{props.eng_title}</h4>
          <p className="card-text text-secondary">{props.hin_title} </p>
          <a href="/dashboard/subjectview" className="btn btn-outline-primary">View</a>
        </div>
        <LongMenu/>
     
     
       </div>
       
       


    );
   

}


export default CardUI;