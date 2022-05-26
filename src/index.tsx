import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';

import App from './App';

import store from "./redux/store"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <App />
          }>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
