
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CardSyllabus = props => {
  let navigate = useNavigate();
 
  return (


      <Card sx={{ display: 'flex',}}>
      <CardMedia
      component="img"
      sx={{ width: 100, }}
      image={props.s_image}
      alt="Live from space album cover"
    />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" sx={{fontSize:14}}>
          {props.subject_name_e}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {props.subject_name_h}
          </Typography>
          <Button size="small"
          
          onClick={()=>{
            navigate(`/dashboard/SyllabusUI/${props.subject_id}/${props.subject_name_e}`)
          }}
          >view syllabus</Button>

        </CardContent>
        
      </Box>

     
    </Card>






      );


}


      export default CardSyllabus;