// src/app/produtos/fone.js
"use client";

import Navbar from '../../components/navbar';
import Image from 'next/image';
import styles from '../../styles/Produto.module.css';
import foneImage from '../../assets/fone.png';

export default function Fone() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>Fones de Ouvido</div>
        <div className={styles.imageWrapper}>
          <Image
            src={foneImage}
            alt="Fones de Ouvido"
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.box}>
          <div className={styles.text}>
            Fones de ouvido com isolamento acústico, conectados aos óculos para auxiliar deficientes visuais.
          </div>
          <div className={styles.text}>Valor: R$ 1391,66</div>
        </div>
      </div>
    </>
  );
}
