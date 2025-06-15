import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";

function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitHovered, setSubmitHovered] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  // Añadir este useEffect para cambiar el título de la página
  useEffect(() => {
    // Guardar el título anterior para restaurarlo cuando se desmonte el componente
    const prevTitle = document.title;
    // Establecer el nuevo título
    document.title = "320 - Home";
    
    // Cleanup function para restaurar el título original cuando el componente se desmonte
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("¡Te has registrado con éxito!");
    }, 1000);
  };

  // Resto del código permanece igual...
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.content}>
        <section style={styles.left}>
          <h2 style={styles.campusMessage}>Tu campus hecho comunidad</h2>
          <h3 style={styles.mainHeading}>
            🎓 La única red social universitaria que conecta con tus verdaderos intereses
          </h3>
          <div style={styles.features}>
            <div style={styles.featureItem}>
              <span style={styles.emoji}>✨</span>
              <span>
                <strong>Conexiones Diarias:</strong> cada mañana, recomendaciones basadas en tu actividad e intereses reales.
              </span>
            </div>
            <div style={styles.featureItem}>
              <span style={styles.emoji}>💬</span>
              <span>
                <strong>Círculos Temáticos:</strong> únete a comunidades donde tus intereses y proyectos cobran vida.
              </span>
            </div>
            <div style={styles.featureItem}>
              <span style={styles.emoji}>📅</span>
              <span>
                <strong>Tablón de actividades:</strong> no te pierdas ningún evento relevante de tu campus.
              </span>
            </div>
          </div>
        </section>

        {/* Sección derecha: wishlist privilegiada con Formspree */}
        <section style={styles.right}>
          <div style={styles.wishlistContainer}>
            <h4 style={styles.wishlistHeading}>🎯 Apúntate a nuestra wishlist</h4>
            <p style={styles.wishlistSubheading}>Los primeros serán los privilegiados</p>
            <form
              action="https://formspree.io/f/mvgrrbvp"
              method="POST"
              style={styles.wishlistForm}
              onSubmit={handleSubmit}
            >
              <div style={styles.inputWrapper}>
                <input
                  name="email"
                  type="email"
                  placeholder="ejemplo@uma.es"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  style={{
                    ...styles.wishlistInput,
                    ...(inputFocused ? styles.wishlistInputFocused : {})
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  ...styles.wishlistButton,
                  ...(submitHovered ? styles.wishlistButtonHover : {}),
                  ...(isSubmitting ? styles.wishlistButtonSubmitting : {})
                }}
                onMouseEnter={() => setSubmitHovered(true)}
                onMouseLeave={() => setSubmitHovered(false)}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "¡Apúntame!"}
              </button>
            </form>
            <div style={styles.benefitsContainer}>
              <div style={styles.benefitItem}>
                <span style={styles.benefitIcon}>⚡</span>
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
    paddingTop: '23vh',
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
    paddingTop: "clamp(100px, 15vh, 170px)",
    paddingLeft: "clamp(16px, 5vw, 60px)",
    paddingRight: "clamp(16px, 5vw, 60px)",
    paddingBottom: "clamp(40px, 5vh, 80px)",
    alignItems: "center", // Centrado vertical para mejorar visualmente
    boxSizing: "border-box",
    justifyContent: "center", // Cambio a center para mejor comportamiento responsivo
    gap: "clamp(40px, 8vw, 100px)", // Aumenté el gap para mejor separación
  },
  left: {
    flex: "1 1 500px",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(16px, 3vh, 30px)",
    minWidth: "280px",
    maxWidth: "600px", // Limitado para mantener legibilidad
    order: 1, // Para control de orden en móvil
  },
  campusMessage: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.2,
  },
  mainHeading: {
    fontSize: "clamp(20px, 3vw, 32px)",
    fontWeight: 600,
    margin: 0,
    color: "#fafafa",
    lineHeight: 1.3,
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(12px, 2vh, 20px)",
    marginTop: "clamp(16px, 3vh, 30px)",
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "clamp(8px, 2vw, 16px)",
    fontSize: "clamp(15px, 1.8vw, 18px)",
    lineHeight: 1.5,
  },
  emoji: {
    fontSize: "clamp(18px, 2.5vw, 26px)",
    flexShrink: 0,
    width: "32px",
    display: "flex",
    justifyContent: "center",
  },
  right: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Cambio a center para mejor alineación
    minWidth: "280px",
    maxWidth: "450px", // Limitado para mantener el formulario contenido
    order: 2, // Para control de orden en móvil
  },
  wishlistContainer: {
    backgroundColor: "#111",
    padding: "clamp(24px, 5vw, 40px)",
    borderRadius: "clamp(12px, 2vw, 20px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
    width: "100%",
    textAlign: "center", // Cambio a center para mejor estética
    boxSizing: "border-box",
    border: "1px solid #333",
    background: "linear-gradient(145deg, #111 0%, #1a1a1a 100%)", // Gradiente sutil
    transform: "translateY(0)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
    },
  },
  wishlistHeading: {
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 700,
    margin: "0 0 clamp(6px, 1.5vh, 12px)",
    background: "linear-gradient(90deg, #fff, #aaa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  wishlistSubheading: {
    fontSize: "clamp(15px, 1.8vw, 17px)",
    margin: "0 0 clamp(20px, 4vh, 32px)",
    color: "#ccc",
    fontWeight: 400,
  },
  wishlistForm: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(16px, 2.5vh, 24px)",
    width: "100%",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    transition: "transform 0.2s ease",
    "&:focus-within": {
      transform: "scale(1.02)",
    },
  },
  wishlistInput: {
    padding: "clamp(12px, 3vh, 18px) clamp(12px, 2vw, 18px)",
    borderRadius: "clamp(6px, 1vw, 10px)",
    border: "none",
    fontSize: "clamp(15px, 1.8vw, 17px)",
    background: "rgba(34, 34, 34, 0.8)",
    color: "#fff",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
  wishlistInputFocused: {
    background: "#2a2a2a",
    boxShadow: "0 0 0 2px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.3)",
  },
  wishlistButton: {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    padding: "clamp(12px, 3vh, 18px)",
    fontWeight: 700,
    fontSize: "clamp(15px, 1.8vw, 17px)",
    borderRadius: "clamp(6px, 1vw, 10px)",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(255,255,255,0.15)",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(45deg, #fff, #e6e6e6)",
      zIndex: -1,
      transition: "opacity 0.3s ease",
    },
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
    marginTop: "clamp(20px, 4vh, 32px)",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "clamp(10px, 2vw, 20px)",
  },
  benefitItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "clamp(13px, 1.5vw, 15px)",
    color: "#aaa",
    padding: "clamp(6px, 1vh, 10px) clamp(10px, 1.5vw, 16px)",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.05)",
  },
  benefitIcon: {
    fontSize: "clamp(14px, 1.8vw, 18px)",
  },
};

// Para manejar media queries en inline styles para React
if (typeof window !== 'undefined') {
  // Media query para dispositivos móviles pequeños
  if (window.matchMedia("(max-width: 768px)").matches) {
    styles.left.order = 1;
    styles.right.order = 2;
  }
  
  // Media query para dispositivos muy pequeños
  if (window.matchMedia("(max-width: 480px)").matches) {
    styles.content.paddingTop = "80px";
    styles.content.gap = "30px";
  }
}

export default Home;