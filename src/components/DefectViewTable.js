function DefectViewTable(prop) {
  const searchSummery = "Search Result"
  const resultArray = [
    {
      key: 1,
      cat: "UI",
      desc: "Submit button not working",
      priority: 1,
      status: "open",
      changeStatus: "Close Defect"
    },
    {
      key: 2,
      cat: "Functional",
      desc: "Submit button not working",
      priority: 2,
      status: "open",
      changeStatus: "Close Defect"
    },
    {
      key: 3,
      cat: "Change Request",
      desc: "Add remove user functionality",
      priority: 3,
      status: "closed",
      changeStatus: "No action pending"
    },
  ];

  return (
    <>
      <div className="defectViewTable">
        <h2>Defect Details</h2>
        <p>{searchSummery}</p>
        <table className="table table-bordered table-hover">
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
                <tr key={row.key}>
                  <td>{row.cat}</td>
                  <td>{row.desc}</td>
                  <td>{row.priority}</td>
                  <td>{row.status}</td>
                  <td>{row.changeStatus}</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DefectViewTable;