import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const bodyEx = document.querySelector("body");

function changeTheme() {
  bodyEx.classList.add('dark');
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

const element3 =
  (<label className="switch" htmlFor="checkbox">
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
