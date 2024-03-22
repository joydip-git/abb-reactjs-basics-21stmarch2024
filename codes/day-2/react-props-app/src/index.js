import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
//const app = App()
//root.render(app)

//const appObj = new App()
//const app = appObj.render()
//root.render(app)

root.render(
  // <StrictMode>
  <App />
  //</StrictMode>
);
