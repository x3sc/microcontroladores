"use client";

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}>Home</li>
        <li style={navItemStyle}>Sobre Nos</li>
        <li style={navItemStyle}>Produtos</li>
        <li style={navItemStyle}>Login</li>
      </ul>
    </nav>
  );
}

const navbarStyle = {
  position: 'fixed',
  top: '0',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
  backgroundColor: '#f5f5f5', // Cinza claro
  borderBottom: '1px solid #ccc',
  zIndex: 1000,
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  fontSize: '16px',
  color: '#333', // Cinza escuro para contraste
};

const navItemStyle = {
  position: 'relative',
  padding: '0 10px',
  cursor: 'pointer',
  borderLeft: '1px solid #ddd', // Linha entre os itens
};

navItemStyle.firstChild = {
  borderLeft: 'none', // Remove a linha do primeiro item
};
