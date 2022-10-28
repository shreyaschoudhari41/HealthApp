import React from "react";
import {Link} from "react-router-dom";

function NewsItems(props) {


  return (
    <>

      <div className="container">
      <div className="card my-5" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.urlToImage} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">
            {props.description}...
          </p>
          <Link target="_blank" to={props.apikey} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default NewsItems;
