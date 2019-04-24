import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

var clickStyles = {
    delete: {
fontFamily: 'Roboto',

  }
}

  

const Movie = (props) => {
     return (
         <tr scrollY>
             <td>{ props.movie.name }</td>
             <td>{ props.movie.rating }</td>
             <td>{ props.movie.genre }</td>
             <td>{ props.movie.contentrating }</td>
             <td>{ props.movie.runtime }</td>
             <td scrollY>{ props.movie.description }</td>
             <Button style={clickStyles.delete} color='warning'>Edit </Button>
             <Button style={clickStyles.delete} color='danger'>Delete </Button>
         </tr>
     )
}

export default Movie;
