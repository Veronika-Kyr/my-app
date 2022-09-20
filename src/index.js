import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const element = React.createElement("h1", { style: { color: '#999', fontSize: '19px' } }, "Solar system planets:");

const element2 = (<div>
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
