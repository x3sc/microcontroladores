// src/app/page.js
"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import styles from './styles/Home.module.css';

export default function Home() {
  const [theme, setTheme] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    // Intervalo para aumentar o valor de 'theme' suavemente
    const interval = setInterval(() => {
      setTheme((prev) => Math.min(prev + 0.02, 1));
    }, 50);

    // Timeout para definir o fim da transição
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      clearInterval(interval);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Navbar aparece somente ao fim da transição */}
      {!isTransitioning && <Navbar />}
      
      {/* Overlay de transição */}
      <div
        className={styles.overlay}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${1 - theme})`,
        }}
      >
        {/* Texto principal com transição de cor */}
        <h1
          className={styles.centerText}
          style={{
            color: `rgb(${255 * (1 - theme)}, ${255 * (1 - theme)}, ${255 * (1 - theme)})`,
            fontFamily: "'SF Pro Display', 'Helvetica Neue', 'Arial', sans-serif",
            fontWeight: '600',
            fontSize: '2.5rem',
            letterSpacing: '0.05em',
          }}
        >
          Uma nova maneira de enxergar
        </h1>
      </div>

      {/* Conteúdo da página que aparece após a transição */}
      <div className={styles.content} style={{ opacity: theme }}>
        <h2 className={styles.subtitle}>Consulte aqui nossos produtos</h2>

        <div>
          teste
        </div>

      </div>




    </>
  );
}
