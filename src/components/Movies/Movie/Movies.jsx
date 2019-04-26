import "../Movies.css";
import Movie from "../Movie/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import APIURL from "../../../helpers/environment";
import { MDBTable } from "mdbreact";
import React from "react";

/****************************************************************************************************************
                                       oooooooooooooo
 **************************************RADIUM STYLING*************************************************************
                                       oooooooooooooo
 ***************************************************************************************************************/

var tdStyles = {
  td: {
    padding: "15px",
    paddingRight: "105px",
    borderCollapse: "collapse",
    backgroundColor: "black",
    color: "goldenrod",
    opacity: "0.85",
    fontFamily: "Roboto",
    position: "relative",
    top: "0px"
  }
};

var thStyles = {
  thead: {
    borderBottom: "2px solid darkslategray",
    backgroundColor: "black",
    color: "goldenrod",
    opacity: "0.85",
    fontFamily: "Roboto",
    position: "relative",
    top: "0px",
    bottom: "100px"
  }
};

var trStyles = {
  tr: {
    borderBottom: "1px solid lightgray",
    backgroundColor: "black",
    color: "goldenrod",
    opacity: "0.85",
    fontFamily: "Roboto",
    position: "relative",
    top: "0px",
    bottom: "100px"
  }
};

var tableStyles = {
  table: {
    margin: "25vh auto",
    position: "relative",
    top: "0px",
    zIndex: 2,
    bottom: "100px"
  }
};

var h1Styles = {
  h1: {
    fontFamily: "Roboto",
    fontSize: "60px",
    color: "goldenrod",
    position: "relative",
    left: "10em"
  }
};

var tbodyStyles = {
  tbody: {
    overflow: "auto"
  }
};

var clickStyles = {
  delete: {
    fontFamily: "Roboto",
    top: "265px",
    position: "fixed",
    right: "650px"
  }
};

/************************************************************************************************************
                                      xxxxxxxxxxxxxx
 ************************************ RADIUM STYLING **********************************************************
                                      xxxxxxxxxxxxxx
 ************************************************************************************************************/

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      // updatePressed: false,
      // movieToUpdate: {}
    };
  }

  componentDidMount() {
    console.log(this.props)
    this.fetchMovies();
  }

  fetchMovies = () => {
    fetch(`${APIURL}/movies/viewmovies`, {
      methods: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(movieData => {
        console.log(movieData) /*new change*/
         this.setState({ 
           movies: movieData 
          });
      });
  };

  movieDelete = event => {
    fetch(`${APIURL}/movie/${event.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ movie: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      })
    }).then(res => this.fetchmovies());
  };

  movieUpdate = (event, movie) => {
    fetch(`${APIURL}/movies/editmovie${movie.id}`, {
      method: "PUT",
      body: JSON.stringify({ movie }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      })
    }).then(res => {
      this.setState({
        movieToUpdate: movie,
        updatePressed: false
      });
      this.fetchmovies();
    });
  };

  setUpdatedmovie = (event, movie) => {
    this.setState({
      movieToUpdate: movie,
      updatePressed: true
    });
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
          <MDBTable cellspacing="0" autoWidth style={tableStyles.table}>
            <thead style={thStyles.thead}>
              <td style={tdStyles.td}>Name</td>
              <td style={tdStyles.td}>Rating</td>
              <td style={tdStyles.td}>Genre</td>
              <td style={tdStyles.td}>Content-Rating</td>
              <td style={tdStyles.td}>Runtime</td>
              <td style={tdStyles.td}>Description</td>
            </thead>
            <tbody>
            {movieRows}
            </tbody>
          </MDBTable>
        </div>
      );
    };
    // return(
    //   <div>
    //     {movieRows}
    //   </div>
    // )
  }

