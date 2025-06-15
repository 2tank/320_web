import React, { useState, useEffect } from "react";

export default function Contact() {
  // Añadir este useEffect para cambiar el título de la página
  useEffect(() => {
    // Guardar el título anterior para restaurarlo cuando se desmonte el componente
    const prevTitle = document.title;
    // Establecer el nuevo título
    document.title = "320 - Contact";
    
    // Cleanup function para restaurar el título original cuando el componente se desmonte
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.innerContainer}>
        <h2 style={styles.heading}>📬 Contáctanos</h2>
        <form
          action="https://formspree.io/f/mvgrrbvp"
          method="POST"
          style={styles.form}
        >
          <label htmlFor="name" style={styles.label}>
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            style={styles.input}
            required
          />

          <label htmlFor="email" style={styles.label}>
            Correo universitario
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Tu correo"
            style={styles.input}
            required
          />

          <label htmlFor="subject" style={styles.label}>
            Motivo de contacto
          </label>
          <select
            id="subject"
            name="subject"
            style={styles.input}
            required
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="soporte">Soporte técnico</option>
            <option value="colaboracion">Colaboración / Partners</option>
            <option value="feedback">Feedback y sugerencias</option>
            <option value="otro">Otro</option>
          </select>

          <label htmlFor="message" style={styles.label}>
            Descripción
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Cuéntanos en detalle tu consulta..."
            style={styles.textarea}
            required
          />

          <button type="submit" style={styles.button}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#000",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 80, // espacio para el header
    paddingBottom: 40, // Añadido espacio en la parte inferior de la página
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    width: "100%", // Cambiado de 100vw a 100% para evitar posibles scroll horizontales
  },
  innerContainer: {
    width: "100%",
    maxWidth: 500,
    padding: "0 16px 40px", // Añadido padding-bottom para más espacio
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: 24,
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  label: {
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom: 4,
  },
  input: {
    padding: "12px 16px",
    borderRadius: 8,
    border: "none",
    fontSize: "1rem",
    background: "#111",
    color: "#fff",
    outline: "none",
  },
  textarea: {
    padding: "12px 16px",
    borderRadius: 8,
    border: "none",
    fontSize: "1rem",
    background: "#111",
    color: "#fff",
    outline: "none",
    height: 120,
    resize: "vertical",
  },
  button: {
    marginTop: 16,
    marginBottom: 32, // Añadido margin-bottom para separar el botón del final
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    padding: "14px",
    fontWeight: 700,
    fontSize: "1rem",
    borderRadius: 8,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
  },
};