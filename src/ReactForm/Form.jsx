import React, { useState } from "react";
import Map from "./Map";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../ReduxReact/store";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [view, setView] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function save(e) {
    e.preventDefault();
    if (!data.name) alert("Enter name here!.....");
    if (!data.email) alert("Enter email here!....");

    setView([...view, data.name]);
  }

  let a_redux = useSelector((state) => state.count);
  console.log(a_redux);
  let d=useDispatch()
  return (
    <div>
      <form onSubmit={save} onReset={() => alert("Page reseted!!!.....")}>
        <input
          type="text"
          placeholder="Enter name here"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        {!data.name && "Please enter name"}
        <input
          type="email"
          placeholder="Enter email here"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input type="submit" />
        <input type="reset" />
      </form>

      {view.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <Map />
      <button onClick={() => "a"}>GO to a</button>
      <button onClick={() => "crud"}>crud </button>
      <a href="/hook/state">State</a>

      <h1>
        Redux value
        {a_redux}
      </h1>

      <button onClick={()=>d(increment())}>
        Click to perform redux
      </button>
    </div>
  );
}
