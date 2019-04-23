import React from 'react';

const Movie = (props) => {
     return (
         <tr>
             <td>{ props.movie.name }</td>
             <td>{ props.movie.rating }</td>
             <td>{ props.movie.genre }</td>
             <td>{ props.movie.contentrating }</td>
             <td>{ props.movie.runtime }</td>
             <td>{ props.movie.description }</td>
         </tr>
     )
}

export default Movie;
