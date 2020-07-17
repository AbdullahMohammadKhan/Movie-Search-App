import React from "react";
import SearchMovies from "./SearchMovies";
//import ReactDOM from "react-dom";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search App</h1>
        <SearchMovies />
      </div>
    );
  }
}

export default Main;
