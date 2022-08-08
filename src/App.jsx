import React from "react";
import { useState } from "react";
import data from "./data";
import "./App.css"
const App=()=>{
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    let num = parseInt(count);
    if(count<0){
      num=1;
    }
    else if(count>8){
      num=8;
    }
    setText(data.slice(0,num));
  }
  const changeFuntion=(e)=>{
    setCount(()=>{
      return (e.target.value);
    })
  }
  return(
    <section className="section">
      <h1>Tired of boring lorem ipsum</h1>
      <form className="forem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraph
        </label>
        <input onChange={changeFuntion} type="number" id="amount" value={count} name="amount" />
        <button type="submit">Generate</button>
      </form>
      <div className="show-para">
        {text.map((txt,index)=>{
          return(
            <p className="index" key={index}>{txt}</p>
        )
        })}
      </div>
    </section>
  )
}
export default App;