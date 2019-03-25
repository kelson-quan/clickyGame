import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Jumbotron (props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
    )
};

export default Jumbotron;