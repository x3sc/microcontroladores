// src/app/pages/sobre.js
"use client";

import Navbar from '../components/navbar';
import styles from '../styles/Sobre.module.css';

export default function Sobre() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.introduction}>
          <h1 className={styles.title}>Sobre a New Perspective</h1>
          <p className={styles.text2}>
            A <strong>New Perspective</strong> nasceu da necessidade de responder a uma simples, mas poderosa pergunta:
            <em> "Se hoje você perdesse a visão, conseguiria pegar um copo de água sozinho na sua própria cozinha?"</em>.
            Nosso objetivo é ajudar tanto aqueles que convivem com a cegueira há anos quanto aqueles que perderam a visão recentemente.
          </p>
        </section>

        <section className={styles.team}>
          <h2 className={styles.subtitle}>Nosso Grupo</h2>
          <div className={styles.teamList}>
            <div className={styles.member}>
              <h3>Gustavo Assis</h3>
              <p className={styles.text}>Responsável pela criação do site e pela experiência do usuário.</p>
            </div>
            <div className={styles.member}>
              <h3>Kaun Bochehca</h3>
              <p className={styles.text}>Coordenador do projeto, organizou as tarefas e cronogramas.</p>
            </div>
            <div className={styles.member}>
              <h3>Gabrielle</h3>
              <p className={styles.text}>Criadora dos textos e apresentações dos produtos.</p>
            </div>
            <div className={styles.member}>
              <h3>Guilherme</h3>
              <p className={styles.text}>Responsável pelo orçamento bruto dos equipamentos.</p>
            </div>
            <div className={styles.member}>
              <h3>Isaac</h3>
              <p className={styles.text}>Responsável pela listagem dos materiais brutos.</p>
            </div>
            <div className={styles.member}>
              <h3>Arthur</h3>
              <p className={styles.text}>Responsável pela listagem dos materiais brutos.</p>
            </div>
          </div>
        </section>

        <section className={styles.vision}>
          <h2 className={styles.subtitle}>Visão para o Futuro</h2>
          <p className={styles.text2}>
            Nossa visão é aprimorar os produtos existentes, tornando-os ainda mais acessíveis e expandir nosso portfólio
            para atender outras deficiências. Queremos impactar a vida de todas as pessoas com deficiência, oferecendo
            dispositivos assistivos inovadores e de alta qualidade.
          </p>
        </section>

        <section className={styles.process}>
          <h2 className={styles.subtitle}>Nosso Processo</h2>
          <ol className={styles.orderedList}>
            <li className={styles.listItem}><strong>Abstração do Problema:</strong> Identificação dos desafios enfrentados por deficientes visuais.</li>
            <li className={styles.listItem}><strong>Listagem de Materiais Brutos:</strong> Pesquisa detalhada sobre os materiais necessários.</li>
            <li className={styles.listItem}><strong>Pesquisa de Valores:</strong> Elaboração do orçamento e descrições dos produtos.</li>
            <li className={styles.listItem}><strong>Construção do Site:</strong> Desenvolvimento da interface para apresentação ao público.</li>
          </ol>
        </section>

        <section className={styles.mission}>
          <h2 className={styles.subtitle}>Missão</h2>
          <p className={styles.text2}>
            A nossa missão é proporcionar autonomia e qualidade de vida para todos, desenvolvendo tecnologias assistivas
            que mudem a forma como as pessoas veem o mundo.
          </p>
        </section>
      </div>
    </>
  );
}
