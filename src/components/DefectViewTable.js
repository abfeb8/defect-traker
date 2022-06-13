function DefectViewTable(prop) {
  const searchSummery = "Search Result"
  const resultArray = prop.searchResult;

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