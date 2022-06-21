import { useRef, useState } from "react";
import axios from "axios";

function AddDefect(prop) {

  const category = useRef("UI");
  const description = useRef("");
  const [priority, setPriority] = useState(1);

  const submitHandeller = () => {
    // creating new employe obj from the form inputs
    let emp = {
      cat: category.current.value,
      desc: description.current.value,
      priority: priority,
      status: "open",
    };

    // posting emp object to db
    axios.post("http://localhost:4000/defects", emp).catch(exp => alert(exp));

    // changing veiew back to defect table 
    prop.changeView("table")
  }

  return (
    <>
      <div className="container">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Category</label>
          <select ref={category} className="custom-select col-sm-5" id="exampleFormControlSelect1">
            <option>UI</option>
            <option>Functional</option>
            <option>Change Request</option>
          </select>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea ref={description} className="form-control" rows="3"></textarea>
          </div>
        </div>

        <div className="radio">
          <label className="col-sm-2 col-form-label">Priority</label>
          <div className="form-check form-check-inline">
            <input onChange={(event) => setPriority(event.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" value="1" defaultChecked />
            <label className="form-check-label">1</label>
          </div>
          <div className="form-check form-check-inline">
            <input onChange={(event) => setPriority(event.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" value="2" />
            <label className="form-check-label">2</label>
          </div>
          <div className="form-check form-check-inline">
            <input onChange={(event) => setPriority(event.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" value='3' />
            <label className="form-check-label">3</label>
          </div>
        </div>

        <button onClick={() => submitHandeller()} className="btn btn-primary">Add</button>
      </div>
    </>
  )
}

export default AddDefect;