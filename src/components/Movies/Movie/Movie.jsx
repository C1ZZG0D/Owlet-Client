import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

var clickStyles = {
    button: {
      fontFamily: 'Roboto',
      // color: 'warning',
      // backgroundColor: 'black',
      
    }
  }

  

const Movie = (props) => {
     return (
         <tr>
             <td>{ props.movie.name }</td>
             <td>{ props.movie.rating }</td>
             <td>{ props.movie.genre }</td>
             <td>{ props.movie.contentrating }</td>
             <td>{ props.movie.runtime }</td>
             <td>{ props.movie.description }</td>
             <Button style={clickStyles.button} color='warning'>Edit </Button>
         </tr>
     )
}

export default Movie;
