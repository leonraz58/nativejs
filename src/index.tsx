import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { splitIntoWords, sum } from './01-Hello-test/01';
import {User} from "./05/06-callbacks";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <User
    />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

