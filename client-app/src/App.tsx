import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        {activities.map((activitiy: any) => (
          <li key={activitiy.id}>{activitiy.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
