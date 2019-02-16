import React from "react";

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <a class="navbar-brand" href="#">Clicky Game</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link">Click an image to begin <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <span class="navbar-text">
          Score: {props.score} | Top Score: {props.topScore}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
