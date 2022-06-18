import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

import DefectViewTable from "./DefectViewTable";
import Form from "./Form";
import AddDefect from "./AddDefect";

function DefectTracker() {

  const [view, setView] = useState("table");
  const [resultArray, setResult] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/defects')
      .then(res => setResult(res.data))
      .catch(error => console.log(error));
  }, [resultArray, view]);

  return (
    <>
      <div className="container">
        <h1>Defect Tracker</h1>
        <div>
          <div><Link to="/login" className="btn btn-link">Logout</Link></div>
        </div>
        <div>
          <button onClick={() => setView("addDefect")} className="btn btn-link">Add Defect</button>
          <button onClick={() => setView("table")} className="btn btn-link">View Defect</button>
        </div>

        {view === "table" ?
          <>
            <div className="container filter">
              <h4>Filter Details</h4>
              <Form />
            </div>
            <DefectViewTable searchResult={resultArray} />
          </>
          :
          <AddDefect changeView={setView} />
        }

      </div >
    </>
  )
}

export default DefectTracker;