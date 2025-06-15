import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";

function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitHovered, setSubmitHovered] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // Detector de tamaño de pantalla para mejor responsividad
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cambiar título de la página
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "320 - Home";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("¡Te has registrado con éxito!");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={{
        ...styles.content,
        paddingTop: isSmallMobile ? "90px" : isMobile ? "110px" : "150px"
      }}>
        <section style={styles.left}>
          <h2 style={{
            ...styles.campusMessage,
            fontSize: isSmallMobile ? "32px" : "clamp(32px, 5.5vw, 52px)" // Más grande
          }}>Tu campus hecho comunidad</h2>
          <h3 style={{
            ...styles.mainHeading,
            fontSize: isSmallMobile ? "22px" : "clamp(22px, 3.5vw, 36px)" // Más grande
          }}>
            🎓 La única red social universitaria que conecta con tus verdaderos intereses
          </h3>
          <div style={{
            ...styles.features,
            gap: isSmallMobile ? "14px" : "clamp(16px, 2.5vh, 26px)" // Más espacio
          }}>
            <div style={styles.featureItem}>
              <span style={{
                ...styles.emoji,
                fontSize: isSmallMobile ? "20px" : "clamp(20px, 3vw, 30px)" // Emoji más grande
              }}>✨</span>
              <span style={styles.featureText}>
                <strong>Conexiones Diarias:</strong> cada mañana, recomendaciones basadas en tu actividad e intereses reales.
              </span>
            </div>
            <div style={styles.featureItem}>
              <span style={{
                ...styles.emoji,
                fontSize: isSmallMobile ? "20px" : "clamp(20px, 3vw, 30px)"
              }}>💬</span>
              <span style={styles.featureText}>
                <strong>Círculos Temáticos:</strong> únete a comunidades donde tus intereses y proyectos cobran vida.
              </span>
            </div>
            <div style={styles.featureItem}>
              <span style={{
                ...styles.emoji,
                fontSize: isSmallMobile ? "20px" : "clamp(20px, 3vw, 30px)"
              }}>📅</span>
              <span style={styles.featureText}>
                <strong>Tablón de actividades:</strong> no te pierdas ningún evento relevante de tu campus.
              </span>
            </div>
          </div>
        </section>

        <section style={styles.right}>
          <div style={{
            ...styles.wishlistContainer,
            padding: isSmallMobile ? "30px 20px" : "clamp(30px, 6vw, 50px)" // Más padding
          }}>
            <h4 style={{
              ...styles.wishlistHeading,
              fontSize: isSmallMobile ? "24px" : "clamp(24px, 3.5vw, 34px)" // Más grande
            }}>🎯 Apúntate a nuestra wishlist</h4>
            <p style={{
              ...styles.wishlistSubheading,
              fontSize: isSmallMobile ? "17px" : "clamp(17px, 2vw, 20px)", // Más grande
              margin: "0 0 clamp(24px, 4vh, 36px)" // Más espacio
            }}>Los primeros serán los privilegiados</p>
            
            <form
              action="https://formspree.io/f/mvgrrbvp"
              method="POST"
              style={{
                ...styles.wishlistForm,
                gap: "clamp(20px, 3vh, 30px)" // Más espacio
              }}
              onSubmit={handleSubmit}
            >
              <div style={styles.inputWrapper}>
                <input
                  name="email"
                  type="email"
                  placeholder={isSmallMobile ? "ejemplo@uma.es" : "ejemplo@uma.es"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  style={{
                    ...styles.wishlistInput,
                    ...(inputFocused ? styles.wishlistInputFocused : {}),
                    fontSize: isSmallMobile ? "17px" : "clamp(17px, 2vw, 19px)", // Más grande
                    padding: isSmallMobile ? "14px 16px" : "16px 20px" // Más padding
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  ...styles.wishlistButton,
                  ...(submitHovered ? styles.wishlistButtonHover : {}),
                  ...(isSubmitting ? styles.wishlistButtonSubmitting : {}),
                  fontSize: isSmallMobile ? "17px" : "clamp(17px, 2vw, 19px)", // Más grande
                  padding: isSmallMobile ? "14px 16px" : "18px 24px", // Más padding
                  fontWeight: 800 // Más negrita para destacar
                }}
                onMouseEnter={() => setSubmitHovered(true)}
                onMouseLeave={() => setSubmitHovered(false)}
                onTouchStart={() => setSubmitHovered(true)} 
                onTouchEnd={() => setSubmitHovered(false)}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "¡Apúntame!"}
              </button>
            </form>
            <div style={{
              ...styles.benefitsContainer,
              marginTop: "clamp(24px, 4vh, 36px)" // Más espacio
            }}>
              <div style={{
                ...styles.benefitItem,
                fontSize: isSmallMobile ? "15px" : "clamp(15px, 1.7vw, 17px)", // Más grande
                padding: "8px 16px" // Más padding
              }}>
                <span style={{
                  ...styles.benefitIcon,
                  fontSize: isSmallMobile ? "17px" : "clamp(17px, 2vw, 20px)" // Más grande
                }}>⚡</span>
                <span>Acceso anticipado</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    paddingTop: '5%',
    backgroundColor: "#000",
    color: "#fff",
    width: "100%",
    minHeight: "100vh",
    padding: 0,
    margin: 0,
    overflowX: "hidden",
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
    position: "relative",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%", 
    maxWidth: "1200px",
    margin: "0 auto",
    // paddingTop se gestiona dinámicamente según el tamaño de pantalla
    paddingLeft: "clamp(20px, 5vw, 60px)", // Aumentado ligeramente
    paddingRight: "clamp(20px, 5vw, 60px)", // Aumentado ligeramente
    paddingBottom: "clamp(50px, 6vh, 100px)", // Más espacio abajo
    alignItems: "flex-start", // Mejor para evitar problemas de alineación
    boxSizing: "border-box",
    justifyContent: "center",
    gap: "clamp(50px, 8vw, 120px)", // Más espacio entre secciones
  },
  left: {
    flex: "1 1 500px",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(20px, 3vh, 36px)", // Más espacio entre elementos
    minWidth: "280px",
    maxWidth: "600px",
    order: 1,
  },
  campusMessage: {
    fontSize: "clamp(32px, 5.5vw, 52px)", // Más grande
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.2,
  },
  mainHeading: {
    fontSize: "clamp(22px, 3.5vw, 36px)", // Más grande
    fontWeight: 600,
    margin: 0,
    color: "#fafafa",
    lineHeight: 1.3,
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(16px, 2.5vh, 26px)", // Más espacio
    marginTop: "clamp(20px, 3vh, 36px)", // Más espacio
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "clamp(10px, 2vw, 20px)", // Más espacio
    fontSize: "clamp(17px, 2vw, 20px)", // Más grande
    lineHeight: 1.5,
  },
  featureText: {
    flex: 1,
    overflowWrap: "break-word", // Para asegurar que no haya desbordamiento
  },
  emoji: {
    fontSize: "clamp(20px, 3vw, 30px)", // Más grande
    flexShrink: 0,
    width: "40px", // Más amplio para emojis más grandes
    display: "flex",
    justifyContent: "center",
  },
  right: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // Mejor para alineación
    minWidth: "280px",
    maxWidth: "480px", // Ligeramente más ancho
    order: 2,
  },
  wishlistContainer: {
    backgroundColor: "#111",
    padding: "clamp(30px, 6vw, 50px)", // Más padding
    borderRadius: "clamp(16px, 2vw, 24px)", // Bordes más suaves
    boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
    width: "100%",
    textAlign: "center",
    boxSizing: "border-box",
    border: "1px solid #333",
    background: "linear-gradient(145deg, #111 0%, #1a1a1a 100%)",
  },
  wishlistHeading: {
    fontSize: "clamp(24px, 3.5vw, 34px)", // Más grande
    fontWeight: 700,
    margin: "0 0 clamp(8px, 1.5vh, 16px)",
    background: "linear-gradient(90deg, #fff, #aaa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text", // Para compatibilidad
  },
  wishlistSubheading: {
    fontSize: "clamp(17px, 2vw, 20px)", // Más grande
    margin: "0 0 clamp(24px, 4vh, 36px)", // Más espacio
    color: "#ccc",
    fontWeight: 400,
  },
  wishlistForm: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(20px, 3vh, 30px)", // Más espacio
    width: "100%",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    transition: "transform 0.2s ease",
  },
  wishlistInput: {
    padding: "16px 20px", // Más padding
    borderRadius: "clamp(8px, 1vw, 12px)", // Bordes más suaves
    border: "none",
    fontSize: "clamp(17px, 2vw, 19px)", // Más grande
    background: "rgba(34, 34, 34, 0.8)",
    color: "#fff",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    WebkitAppearance: "none", // Mejor para Safari
  },
  wishlistInputFocused: {
    background: "#2a2a2a",
    boxShadow: "0 0 0 2px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.3)",
  },
  wishlistButton: {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    padding: "18px 24px", // Más padding
    fontWeight: 800, // Más negrita
    fontSize: "clamp(17px, 2vw, 19px)", // Más grande
    borderRadius: "clamp(8px, 1vw, 12px)", // Bordes más suaves
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(255,255,255,0.15)",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    WebkitTapHighlightColor: "transparent", // Mejor para móviles
  },
  wishlistButtonHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 7px 20px rgba(255,255,255,0.25)",
  },
  wishlistButtonSubmitting: {
    opacity: 0.8,
    cursor: "wait",
  },
  benefitsContainer: {
    marginTop: "clamp(24px, 4vh, 36px)", // Más espacio
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "clamp(12px, 2vw, 24px)", // Más espacio
  },
  benefitItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Más espacio
    fontSize: "clamp(15px, 1.7vw, 17px)", // Más grande
    color: "#aaa",
    padding: "8px 16px", // Más padding
    borderRadius: "999px",
    background: "rgba(255,255,255,0.05)",
  },
  benefitIcon: {
    fontSize: "clamp(17px, 2vw, 20px)", // Más grande
  },
};

export default Home;