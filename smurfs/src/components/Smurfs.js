import React from "react";

const Smurfs = props => {
  console.log(props);
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Name</p>
          <p className="title">{props.smurf.name}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Age</p>
          <p className="title">{props.smurf.age}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Height</p>
          <p className="title">{props.smurf.height}</p>
        </div>
      </div>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>
        Remove Smurf
      </button>
    </nav>
  );
};

export default Smurfs;
