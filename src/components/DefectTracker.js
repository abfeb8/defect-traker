import { useState, useEffect } from "react";
import axios from "axios";

import DefectViewTable from "./DefectViewTable";
import Form from "./Form";

function DefectTracker() {
  const [resultArray, setResult] = useState([]);

  useEffect(() => {
    axios.get('defects.json')
      .then(res => setResult(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Defect Tracker</h1>
        <div>
          <div><button className="btn btn-link">Logout</button></div>
        </div>
        <div>
          <button className="btn btn-link">Add Defect</button>
          <button className="btn btn-link">View Defect</button>
        </div>
        <div className="container filter">
          <h4>Filter Details</h4>
          <Form />
        </div>
        <DefectViewTable searchResult={resultArray} />
      </div >
    </>
  )
}

export default DefectTracker;