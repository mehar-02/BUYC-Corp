import React, {useEffect, useState} from "react";
function Card(props){  

  return(
    <div className="col">
      <div className="card shadow-sm">
        <img src = "https://imgd.aeplcdn.com/664x374/n/cw/ec/9733/city-2011-2014-exterior-right-front-three-quarter-2.jpeg?q=80" alt="car" />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                fdprocessedid="95xiuy"
              >
                {props && props.price && (
                <font style={{ verticalAlign: "inherit;" }}>
                <font style={{ verticalAlign: "inherit;" }}>
                 Rs. {props.price}
                </font>
                </font>
              )}
                
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                fdprocessedid="0yj5zt"
              >
                {props && props.color && (
                  <font style={{ verticalAlign: "inherit;" }}>
                    <font style={{ verticalAlign: "inherit;" }}>
                      {props.color}
                    </font>
                  </font>
                )}
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                fdprocessedid="0yj5zt"
              >
                {props && props.mileage && (
                  <font style={{ verticalAlign: "inherit;" }}>
                    <font style={{ verticalAlign: "inherit;" }}>
                      {props.mileage} miles
                    </font>
                  </font>
                )}
              </button>
            </div>
            <small className="text-body-secondary">
              <font style={{ verticalAlign: "inherit;" }}>
                <font style={{ verticalAlign: "inherit;" }}>{props.name}</font>
              </font>
            </small>
          </div>
       
        </div>
      </div>
    </div>
  );
}
export default Card;