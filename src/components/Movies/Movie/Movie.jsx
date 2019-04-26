import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Movies from '../Movie/Movies';


var clickStyles = {
    delete: {
fontFamily: 'Roboto',
width: '78px'

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
             <td scrollY>{ props.movie.description }</td>
         </tr>
     )
}

export default Movie;
