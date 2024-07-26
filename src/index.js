import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import Form from './Form';

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google'
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // reactElement
  <React.StrictMode>
   <App></App>
   
  
   </React.StrictMode>
);

