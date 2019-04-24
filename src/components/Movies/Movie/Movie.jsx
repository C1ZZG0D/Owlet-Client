import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

var clickStyles = {
    edit: {
      fontFamily: 'Roboto',
      // color: 'warning',
      // backgroundColor: 'black',
      
    },

    delete: {
fontFamily: 'Roboto',

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
             <Button style={clickStyles.edit} color='warning'>Edit </Button>
             <Button style={clickStyles.delete} color='danger'>Delete </Button>
         </tr>
     )
}

export default Movie;
