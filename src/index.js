import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./index.css";
//ReactDOM.Render is outdated now createRoot is used with a variable root

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( //used to render the elements
  <App/>,
   //(document.getElementById("root")); location where they have to be rendered.
)
