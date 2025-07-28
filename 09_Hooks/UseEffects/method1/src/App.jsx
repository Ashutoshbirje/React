import React, { useEffect, useState } from 'react';

const App = () => {
 const [count, setcount] = useState(0);
 
 function handlecount(){
  setcount(count +1);
 }

 const [total, settotal] = useState(0);
 
 function handletotal(){
  settotal(total +1);
 }


// Type 1 : Run on every render
//  useEffect(() => {
//   alert("It will Run on every render")
//  })
 
// Type 2 : Run on only first render
//  useEffect(() => {
//   alert("It will Run on only first render")
//  },[])

// Type 3 : Run on every updation (single) 
//  useEffect(() => {
//   alert("It will Run every time when count is updated")
//  },[count])
  
// Type 4 : Run on every updation (multiple) 
// useEffect(() => {
//   alert("It will Run every time when count/total is updated")
//  },[count,total])

// Type 5 : Run on every moount and unmount time (single) 
useEffect(() => {
  alert("It will Run every time when count/total is updated")
  return()=>{
      alert("count is unmounted from UI");
  }
 },[count])

  return (
    <div>
      <button onClick={handlecount}> Click Me</button>
      <div>count is : {count}</div>
      <button onClick={handletotal}> Click Me</button>
      <div>total is : {total}</div>
    </div>
  );
};

export default App;
