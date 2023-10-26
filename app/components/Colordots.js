'use client'
import { useState } from 'react';
import '../Style/Style.css';

export default function Colordots() {
  const [colorArr, setColorArr] = useState([]);

  function buttonColor(color) {
    setColorArr([...colorArr, { color: color }]);
  }

  function buttonReset() {
    setColorArr([]);
  }

  return (
    <div className='mainContainer'>
      <div className='actionButtons'>
        <button type="button" className="red b1" value="red" onClick={(e)=> buttonColor(e.target.value)}>Red</button>
        <button type="button" className="green b1" value="green" onClick={(e)=> buttonColor(e.target.value)} > Green </button>
        <button type="button" className="yellow b1" value="yellow" onClick={(e)=> buttonColor(e.target.value)} > Yellow </button>
        <button type="button" className="reset b1" value="silver" onClick={buttonReset} > Reset </button>
        </div>
      <div className='container'>
        {colorArr.map((arr, index) => (
          <button key={index} className={arr.color}></button>
        ))}
      </div>
    </div>
  )
}