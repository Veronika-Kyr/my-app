import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const bodyEx = document.querySelector("body");
// const ulEx = document.querySelector("ul");

function changeTheme() {
  bodyEx.classList.add('dark');
  // ulEx.classList.remove('planets-list');
  // ulEx.classList.add('darkUl');
  element2 = (<div>
    {element3}
    {element}
    <ul className='darkUl'>
      <li>Mercury</li>
      <li>Venus</li>
      <li>Earth</li>
      <li>Mars</li>
      <li>Jupiter</li>
      <li>Saturn</li>
      <li>Uranus</li>
      <li>Neptune</li>
      <li>Pluton</li>
    </ul>
  </div>);
  root.render(element2);
}

const element = React.createElement("h1", { style: { color: '#999', fontSize: '19px' } }, "Solar system planets:");
const element3 = (<label className="switch" htmlFor="checkbox">
  <input type="checkbox" id="checkbox" onClick={changeTheme} />
  <div className="slider round"></div>
</label>);
let element2 = (<div>
  {element3}
  {element}
  <ul className='planets-list'>
    <li>Mercury</li>
    <li>Venus</li>
    <li>Earth</li>
    <li>Mars</li>
    <li>Jupiter</li>
    <li>Saturn</li>
    <li>Uranus</li>
    <li>Neptune</li>
    <li>Pluton</li>
  </ul>
</div>);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element2);
reportWebVitals();
