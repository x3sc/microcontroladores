// src/app/produtos/oculos.js
"use client";

import Navbar from '../../components/navbar';
import Image from 'next/image';
import styles from '../../styles/Produto.module.css';
import oculosImage from '../../assets/oculos.png';

export default function Oculos() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>Óculos Inteligentes</div>
        <div className={styles.imageWrapper}>
          <Image
            src={oculosImage}
            alt="Óculos Inteligentes"
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.box}>
          <div className={styles.text}>
            Óculos dinâmico que ajuda o deficiente visual a evitar colisões com objetos ao sinalizar proximidade.
          </div>
          <div className={styles.text}>Valor: R$ 1916,75</div>
        </div>
      </div>
    </>
  );
}
