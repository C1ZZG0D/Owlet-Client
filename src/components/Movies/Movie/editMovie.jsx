import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import APIURL from "../../../helpers/environment";

const styles = {
  editMovie: {
    width: "40vw",
    border: "solid black 2px",
    borderRadius: "1.2em",
    backgroundColor: "black",
    color: "goldenrod",
    fontFamily: "Roboto",
    opacity: "0.85"
  },

  buttons: {
    height: "3em",
    width: "6em",
    // borderRadius: "1.2em",
    // backgroundColor: "#ffa726",
    // borderColor: "#030202",
    // marginTop: "2em",

    ":hover": {
      backgroundColor: "#ffcc80",
      borderColor: "#030202"
    },

    addButtons: {
      height: "3em",
      width: "6em",
      fontFamily: "Roboto"
    }
  }
};
export default class MovieEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
      genre: "",
      contentrating: "",
      runtime: "",
      description: ""
    };
  }
  // componentWillMount() {
  //     this.setState({
  //         id: this.props.movie.id,
  //         name: this.props.movie.name,
  //         rating: this.props.movie.movieType,
  //         genre: this.props.movie.genre,
  //         contentrating: this.props.movie.contentrating,
  //         runtime: this.props.movie.runtime,
  //         description: this.props.movie.description
  //     })
  // } maybe this might be useful ?
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    // this.props.update( event, this.state)
    console.log(this.state);
    fetch(`${APIURL}/movies/editmovies/${this.state.name}`, {
      method: "PUT",
      body: JSON.stringify( this.state ),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(movieData => {
        // after we create a log we want to pull that data from the server.
        // this.props.updateMoviesArray();
        // this.state.sessionToken();
        this.setState({
          name: "",
          rating: "",
          genre: "",
          contentrating: "",
          runtime: "",
          description: ""
        });
        console.log(movieData);
      })
      .catch(err => console.log(err.message));
  };

  handleDelete = event => {
    event.preventDefault();
    this.movieDelete(event, this.state);
  };
  movieDelete = event => {
    console.log(event.target);
    fetch(`${APIURL}/movies/xmovie/${this.state.name}`, {
      method: "DELETE",
      body: JSON.stringify( this.state ) /*should it be name?*/,
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      })
    })
      .then(res => this.fetchmovies())
      .then(res => res.json())
      .catch(err => console.log(err.message));
  };

  addSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    fetch(`${APIURL}/movies/addmovie`, {
      method: "POST",
      body: JSON.stringify( this.state ),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(movieData => {
        // after we create a log we want to pull that data from the server.
        // this.props.updateMoviesArray();
        // this.state.sessionToken();
        this.setState({
          name: "",
          rating: "",
          genre: "",
          contentrating: "",
          runtime: "",
          description: ""
        });
        console.log(movieData);
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div style={styles.editMovie}>
        <h3 align="center">Movie Wizard</h3>
        <hr />

        <Form onSubmit={this.handleSubmit} key="two" id="edit" align="center">
          <FormGroup>
            <Label for="name">Name of Movie</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter the *exact* name of the movie you would like to edit"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup />
          <FormGroup>
            <Label for="rating">Rating</Label>
            <Input
              id="rating"
              type="text"
              name="rating"
              value={this.state.rating}
              placeholder="Enter rating (0-100)"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="genre">Genre</Label>
            <Input
              type="select"
              name="genre"
              id="genre"
              value={this.state.genre}
              placeholder="Genre"
              onChange={this.handleChange}
            >
              <option value="" />
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Action">Action</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Romance">Romance</option>
              <option value="Comedy">Comedy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Mystery">Mystery</option>
              <option valye="Documentary">Documentary</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="contentrating">Content Rating</Label>
            <Input
              type="select"
              name="contentrating"
              id="contentrating"
              value={this.state.contentrating}
              onChange={this.handleChange}
              placeholder="Content Rating"
            >
              <option value="" />
              <option value="NC-17">NC-17</option>
              <option value="R">R</option>
              <option value="PG-13">PG-13</option>
              <option value="PG">PG</option>
              <option value="G">G</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="runtime">Runtime</Label>
            <Input
              id="runtime"
              type="text"
              name="runtime"
              value={this.state.runtime}
              placeholder="Enter the length of the movie (mins)."
              onChange={this.handleChange}
            />
            <Label for="description">Description</Label>
            <Input
              id="description"
              type="text"
              name="description"
              value={this.state.description}
              placeholder="Enter a description of the movie (255 char max)."
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup />

          <Form onSubmit={this.addSubmit}>
          <Button style={styles.buttons}
            
            type="submit"
            key="c"
            color="primary"
          >
           Add
          </Button>
        </Form>
          <Button
            style={styles.buttons}
            key="a"
            type="submit"
            color="warning"
          >
            Edit
          </Button>
        </Form>
        <Form onSubmit={this.handleDelete} align="center">
          <Button style={styles.buttons} key="b" type="submit" color="danger">
            Delete
          </Button>
        </Form>
        
      </div>
    );
  }
}
