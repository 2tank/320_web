import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [logoHovered, setLogoHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <header style={styles.header}>
      {/* Logo clicable */}
      <div
        style={{
          ...styles.headerLogo,
          ...(logoHovered && styles.headerLogoHover)
        }}
        onClick={() => navigate('/')}
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
      >
        320
      </div>
      <button
        style={{
          ...styles.headerButton,
          ...(buttonHovered && styles.headerButtonHover),
          ...(buttonActive && styles.headerButtonActive)
        }}
        onClick={() => navigate('/contact')}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        onMouseDown={() => setButtonActive(true)}
        onMouseUp={() => setButtonActive(false)}
        onBlur={() => {
          setButtonHovered(false);
          setButtonActive(false);
        }}
      >
        Contáctanos
      </button>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 5%",
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    backdropFilter: "blur(10px)",
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  headerLogo: {
    fontFamily: "Roboto, sans-serif",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "2.5rem",
    color: "#fff",
    margin: 0,
    cursor: "pointer",
    userSelect: "none",
    transition: "transform 0.2s ease, color 0.2s ease",
    outline: "none",
  },
  headerLogoHover: {
    color: "#ddd",
    transform: "scale(1.05)",
  },
  headerButton: {
    background: "none",
    border: "2px solid #fff",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "all 0.2s ease",
    outline: "none",
  },
  headerButtonHover: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  headerButtonActive: {
    transform: "translateY(1px)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
};

export default Header;