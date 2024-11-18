"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Carousel from "react-bootstrap/Carousel";
import styles from "./styles/Home.module.css";

import oculosImage from "./assets/oculos.png";
import bengalaImage from "./assets/bengala.png";
import foneImage from "./assets/fone.png";
import sensorImage from "./assets/sensor.png";

export default function Home() {
  const [theme, setTheme] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme((prev) => Math.min(prev + 0.02, 1));
    }, 50);

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {!isTransitioning && <Navbar />}
      <div
        className={styles.pageContainer}
        style={{
          backgroundColor: `rgb(${255 * theme}, ${255 * theme}, ${255 * theme})`,
          transition: "background-color 5s ease",
        }}
      >
        <h1
          className={styles.centerText}
          style={{
            color: `rgb(${255 * (1 - theme)}, ${255 * (1 - theme)}, ${255 * (1 - theme)})`,
            opacity: theme,
            transition: "opacity 2s ease",
          }}
        >
          Uma nova maneira de enxergar
        </h1>

        <h2
          className={styles.subtitle}
          style={{
            opacity: theme,
            transition: "opacity 3s ease",
            transitionDelay: "2s",
          }}
        >
          Consulte aqui nossos produtos
        </h2>

        <div
          className={styles.carouselWrapper}
          style={{
            opacity: theme,
            transition: "opacity 3s ease",
            transitionDelay: "3s",
          }}
        >
          <Carousel className={styles.carousel} interval={10000}>
            <Carousel.Item>
              <div className={styles.carouselItem}>
                <div className={styles.textContainer}>
                  <h3>Óculos Inteligentes</h3>
                  <p>Oferece recursos de leitura e ampliação com realidade aumentada.</p>
                  <p>Preço: R$ 2.182,78</p>
                </div>
                <Image
                  src={oculosImage}
                  alt="Óculos Inteligentes"
                  className={styles.productImage}
                  layout="responsive"
                  objectFit="contain"
                  width={600}
                  height={600}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carouselItem}>
                <div className={styles.textContainer}>
                  <h3>Bengala Eletrônica</h3>
                  <p>Mede as condições do solo e alerta sobre obstáculos.</p>
                  <p>Preço: R$ 1.927,56</p>
                </div>
                <Image
                  src={bengalaImage}
                  alt="Bengala Eletrônica"
                  className={styles.productImage}
                  layout="responsive"
                  objectFit="contain"
                  width={600}
                  height={600}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carouselItem}>
                <div className={styles.textContainer}>
                  <h3>Fones de Ouvido</h3>
                  <p>Com módulo de áudio e isolamento para deficientes visuais.</p>
                  <p>Preço: R$ 1.391,66</p>
                </div>
                <Image
                  src={foneImage}
                  alt="Fones de Ouvido"
                  className={styles.productImage}
                  layout="responsive"
                  objectFit="contain"
                  width={600}
                  height={600}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carouselItem}>
                <div className={styles.textContainer}>
                  <h3>Sensor de Proximidade</h3>
                  <p>Orientação precisa em ambientes complexos.</p>
                  <p>Preço por sensor: R$ 370,00</p>
                </div>
                <Image
                  src={sensorImage}
                  alt="Sensor de Proximidade"
                  className={styles.productImage}
                  layout="responsive"
                  objectFit="contain"
                  width={600}
                  height={600}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
