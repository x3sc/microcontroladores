// src/app/produtos/bengala.js
"use client";

import Navbar from '../../components/navbar';
import Image from 'next/image';
import styles from '../../styles/Produto.module.css';
import bengalaImage from '../../assets/bengala.png';

export default function Bengala() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>Bengala Eletrônica</div>
        <div className={styles.imageWrapper}>
          <Image
            src={bengalaImage}
            alt="Bengala Eletrônica"
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.box}>
          <div className={styles.text}>
            Bengala que mede condições do solo e detecta obstáculos com sensores de distância e feedback sonoro.
          </div>
          <div className={styles.text}>Valor: R$ 1980,00</div>
        </div>
      </div>
    </>
  );
}
