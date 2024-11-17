// src/app/page.js
"use client";

import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
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
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Navbar aparece somente ao fim da transição */}
      {!isTransitioning && <Navbar />}

      {/* Texto principal com transição de cor e fundo da página */}
      <div
        className={styles.pageContainer}
        style={{
          backgroundColor: `rgb(${255 * theme}, ${255 * theme}, ${255 * theme})`,
          transition: 'background-color 0.4s ease',
        }}
      >
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

        {/* Conteúdo da página que aparece após a transição */}
        <div className={styles.content} style={{ opacity: theme }}>
        <h2 className={styles.subtitle}>Consulte aqui nossos produtos</h2>


          <div className={styles.productsContainer}>
            <div className={styles.product}>
              <h3 className={styles.productTitle}>Lupa Eletrônica</h3>
              <p className={styles.productDescription}>
                Amplia a imagem de objetos e textos para facilitar a leitura.
              </p>
            </div>
            <div className={styles.product}>
              <h3 className={styles.productTitle}>Óculos Inteligentes</h3>
              <p className={styles.productDescription}>
                Oferece recursos de leitura e ampliação com realidade aumentada.
              </p>
            </div>
            <div className={styles.product}>
              <h3 className={styles.productTitle}>Teclado Ampliado</h3>
              <p className={styles.productDescription}>
                Facilita a digitação com teclas maiores e contraste elevado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
