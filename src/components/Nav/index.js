import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="https://google.com">Clicky Game</a>
                    <span className="navbar-text">
                        Score: {props.score} | Top Score: {props.highScore}
                    </span>
                </div >
            </nav >
        </div >
    )
};

export default Nav;