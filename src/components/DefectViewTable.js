import axios from "axios";
import { useEffect, useState } from "react";

function DefectViewTable(prop) {
  const searchSummery = "Search Result"
  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/defects")
      .then(res => setResultArray(res.data))
  }, [resultArray]);

  const closeDefectHandeler = (id) => {
    axios.delete("http://localhost:4000/defects/" + id)
      .then(() => {
        axios.get("http://localhost:4000/defects")
          .then((res) => setResultArray(res.data))
      });
    console.log("close defect: " + id);
  }

  return (
    <>
      <div className="defectViewTable">
        <h2>Defect Details</h2>
        <p>{searchSummery}</p>
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th>Defect Category</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {resultArray.map(
              (row) =>
                <tr key={row.id}>
                  <td>{row.cat}</td>
                  <td>{row.desc}</td>
                  <td>{row.priority}</td>
                  <td>{row.status}</td>
                  <td><button onClick={() => closeDefectHandeler(row.id)} className="btn btn-danger btn-sm">Close</button></td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DefectViewTable;