// App.js
import React, { useEffect, useState } from "react";
import Employees from "./components/Employees";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then(data => {
        setEmployees(data.data);})
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <Employees data={employees} />
    </div>
  );
}

export default App;
