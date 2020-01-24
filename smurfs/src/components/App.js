import React, { useState, useEffect } from "react";
import axios from "axios";
import SmurfsForm from "./SmurfsForm";
import SmurfsList from "./SmurfsList";
import NavBar from "./NavBar";

import { SmurfContext } from "../contexts/SmurfContext";
import "./App.css";

const App = () => {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addSmurfs = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {})
      .catch(err => console.log(err));
  };

  const deleteSmurf = smurfId => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <SmurfContext.Provider
      value={{ smurfs, setSmurfs, addSmurfs, deleteSmurf }}
    >
      <div className="App">
        <NavBar />
        <section>
          <div>
            <SmurfsForm />
            <div>
              <h1 className="title">Create Your Smurf Village</h1>
              <SmurfsList />
            </div>
          </div>
        </section>
      </div>
    </SmurfContext.Provider>
  );
};

export default App;
