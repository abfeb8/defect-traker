import { useRef, useState } from "react";


function Form() {

  const [priority, setPriority] = useState('All');
  // const [category, setCategory] = useState(0);
  const category = useRef('All');

  const clickHandeler = () => {
    console.log(priority, category.current.value);
  }

  return (
    <>
      <label className="lable" htmlFor="priority">Priority</label>
      <select onChange={(event) => setPriority(event.target.value)} className="drop-down" id="priority" defaultValue={0}>
        <option value={0}>All</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <br />
      <label className="lable" htmlFor="category">Category</label>
      <select ref={category} className="drop-down" id="category" defaultValue={0}>
        <option>All</option>
        <option>UI</option>
        <option>Functional</option>
        <option>Change Request</option>
      </select>
      <br />
      <button onClick={() => clickHandeler()} className="btn btn-primary">Search</button>
    </>
  )
}

export default Form;