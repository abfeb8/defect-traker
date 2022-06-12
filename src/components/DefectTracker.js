import DefectViewTable from "./DefectViewTable";

function DefectTracker() {
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
          <form className="form-inline">
            <label className="my-1 mr-2" htmlFor="priority">Priority</label>
            <select className="custom-select my-1 mr-sm-2" id="priority" defaultValue={"All"}>
              <option value>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <br />
            <label className="my-1 mr-2" htmlFor="category">Category</label>
            <select className="custom-select my-1 mr-sm-2" id="category" defaultValue={"All"}>
              <option value>All</option>
              <option value="1">UI</option>
              <option value="2">Functional</option>
              <option value="3">Change Request</option>
            </select>
            <br />
            <button type="submit" className="btn btn-primary my-1">Search</button>
          </form>
        </div>
        <DefectViewTable />
      </div >
    </>
  )
}

export default DefectTracker;