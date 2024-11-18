// src/app/components/navbar.js
"use client";

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/sobre">Sobre Nós</Link></li>
        <li className={styles.dropdown}>
          <span>Produtos</span>
          <div className={styles.dropdownContent}>
            <Link href="/produtos/oculos">Óculos Inteligentes</Link>
            <Link href="/produtos/bengala">Bengala Eletrônica</Link>
            <Link href="/produtos/mapeamento">Mapeamento</Link>
            <Link href="/produtos/fone">Fones de Ouvido</Link>
          </div>
        </li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

const navbarStyle = {
  position: 'fixed',
  top: '0',
  right: '0',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0',
  backgroundColor: '#fff',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: '1000',
  color: '#000',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: '0',
  padding: '0',
};
