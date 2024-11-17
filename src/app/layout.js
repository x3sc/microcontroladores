// src/app/layout.js
"use client";

import './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Assistive Products</title>
        <meta name="description" content="Encontre os melhores equipamentos assistivos para cegos." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={bodyStyle}>
        <main style={mainStyle}>
          {children}
        </main>
      </body>
    </html>
  );
}

const bodyStyle = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: '#fff', // Altera para branco após a transição
  color: '#000',
  margin: 0,
  padding: 0,
};

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  height: '100vh',
  width: '100vw',
};
