import React from 'react';
import './Movies.css';
import Movie from './Movie/Movie';
import APIURL from '../../helpers/environment';


/****************************************************************************************************************
                                       oooooooooooooo
 **************************************RADIUM STYLING*************************************************************
                                       oooooooooooooo
 ***************************************************************************************************************/

var tdStyles ={ 

  td: {
  padding: '15px',
  paddingRight: '105px',
  borderCollapse: 'collapse',
  backgroundColor: 'black',
  color: 'goldenrod',
  opacity: '0.85',
  fontFamily: 'Roboto',
  position: 'relative',
  top: '0px',

} };

var thStyles = { 
  thead: {
  borderBottom: '2px solid darkslategray',
  backgroundColor: 'black',
  color: 'goldenrod',
  opacity: '0.85',
  fontFamily: 'Roboto',
  position: 'relative',
  top: '0px',
  bottom: '100px',
} };


var trStyles= {
  tr: {
    borderBottom: '1px solid lightgray',
    backgroundColor: 'black',
    color: 'goldenrod',
    opacity: '0.85',
    fontFamily: 'Roboto',
    position: 'relative',
    top: '0px',
    bottom: '100px',
} };


var tableStyles= {
  table: {
    margin: '25vh auto',
    position: 'relative',
    top: '0px',
    zIndex: 2,
    bottom: '100px',
} };

var h1Styles= {
  h1: {
    fontFamily: 'Roboto',
    fontSize: '60px',
    color: 'goldenrod',
    position: 'relative',
    left: '10em',
    
    
} };

/************************************************************************************************************
                                      xxxxxxxxxxxxxx
 ************************************ RADIUM STYLING **********************************************************
                                      xxxxxxxxxxxxxx
 ************************************************************************************************************/

class Movies extends React.Component {
      constructor(props) {
        super();
        
        this.state = {
          movies : []
        }
      }

      componentDidMount = () => {
        console.log(this.props)
           this.fetchMovies();
      }

      
      fetchMovies = () => {
      let url = `${APIURL}/movies/viewmovies`;

      fetch(url, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.props.token
        }) 
      }) 
      .then(res => res.json()) 
      .then(data => {
            console.log(data)
            this.setState({
              movies : data
            })    
          })
          .then(res => console.log(this.state))
          .catch(err => console.log(err)) 
      };

    render() {
        let movieRows = this.state.movies.map(data => {
            return (
                <Movie movie={data} />

            )

        });

        return (
          <div>
      <h1 style={h1Styles.h1}> Owlet </h1>
   <table style={tableStyles.table}>
   <thead style={thStyles.thead}>
      <td style={tdStyles.td}>Name</td>
      <td style={tdStyles.td}>Rating</td>
      <td style={tdStyles.td}>Genre</td>
      <td style={tdStyles.td}>Content-Rating</td>
      <td style={tdStyles.td}>Runtime</td>
      <td style={tdStyles.td}>Description</td>
           </thead>
           <tbody>
            { movieRows }
           </tbody>
           </table>
           </div>
        )
    }
}

export default Movies;



