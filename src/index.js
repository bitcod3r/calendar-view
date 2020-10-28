import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { setupStore } from "./store";
import { FakeHttpApi } from "./httpApi";
import App from './App';

const reduxStore = setupStore({
  httpApi: new FakeHttpApi(),
});

ReactDOM.render(
  <App reduxStore={reduxStore} />,
  document.getElementById('root')
);
