import React from 'react';
import ReactDOM from 'react-dom/client';



let Abc = ()=>{
  return(
    <>
      <h2>hello</h2>
      <h3>sdfgsdfg</h3>
    </>
  )
}

let Rakesh = ()=>{
  return(
    <>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, atque et iste doloremque maiores nostrum voluptate corrupti, similique explicabo, unde quaerat minus quas. Ipsam ipsa ut harum quisquam inventore quasi.</p>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Abc/>
    <Rakesh/>
  </>
);


