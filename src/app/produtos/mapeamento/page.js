// src/app/produtos/mapeamento.js
"use client";

import Navbar from '../../components/navbar';
import Image from 'next/image';
import styles from '../../styles/Produto.module.css';
import mapeamentoImage from '../../assets/sensor.png';

export default function Mapeamento() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>Mapeamento de Ambiente</div>
        <div className={styles.imageWrapper}>
          <Image
            src={mapeamentoImage}
            alt="Mapeamento de Ambiente"
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.box}>
          <div className={styles.text}>
            Sistema de orientação para ambientes fechados, criando rotas para facilitar a locomoção.
          </div>
          <div className={styles.text}>Valor: R$ 2983,92</div>
        </div>
      </div>
    </>
  );
}
