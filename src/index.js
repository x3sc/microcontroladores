// src/app/index.js
"use client";

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/page';

// Configuração inicial para renderizar o componente Home
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
