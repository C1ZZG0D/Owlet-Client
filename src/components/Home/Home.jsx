// import React, { Component } from 'react';
// import './Home.css';

// render() { 

// return (
// <div className = "home">
// <Navbar />
// <Logout />
// <h1>Welcome to Owlet</h1>
// <h2>Home</h2>
// <br></br>
// <br></br>
// <br></br>
// <h3>What is Owlet?</h3>
// <p>Owlet is a place for exploring, discovering and sharing opinions amongst a vast array of Netflix's movie catalogue.</p>
// </div>







// );

// };

// export default Home;


// class Home extends React.Component  {
//     constructor() {
//       super();
      
//       this.state = {
//         home : []
//       }
//     }

//     componentDidMount = () => {
//          this.fetchHome();
//     }

    
//     fetchHome = () => {
//     let url = 'http://localhost:3000/home';

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//           console.log(data)
//           this.setState({
//             movies : data
//           })    
//         })
//         .catch(err => console.log(err)) .then(res => console.log(this.state));

//     }
//   render() {
//       let movieRows = this.state.movies.map(data => {
//           return (
//               <Movie movie={data} />

//           )

//       })

          
//       return (
         
//       )
//   }
// }

// export default Movies;