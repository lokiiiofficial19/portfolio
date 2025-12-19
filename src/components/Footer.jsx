import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Lokiii ⚡</h2>

        <p style={styles.subtitle}>
          Front-End Developer • HTML • CSS • JavaScript • React
        </p>

        <div style={styles.icons}>
          <a href="https://github.com/" target="_blank" style={styles.iconLink}>
            <FaGithub size={28} />
          </a>

          <a href="https://linkedin.com/" target="_blank" style={styles.iconLink}>
            <FaLinkedin size={28} />
          </a>

          <a href="lokiiiofficial1337@gmail.com" style={styles.iconLink}>
            <FaEnvelope size={28} />
          </a>
        </div>

        <p style={styles.copy}>
          © {new Date().getFullYear()} Lokesh Kumar — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#0d0d0d",
    color: "#fff",
    textAlign: "center",
    padding: "40px 20px",
    marginTop: "50px",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "15px",
    opacity: 0.7,
    marginBottom: "20px",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "20px",
  },
  iconLink: {
    color: "#fff",
    transition: "0.3s",
  },
  copy: {
    fontSize: "13px",
    opacity: 0.6,
    marginTop: "15px",
  },
};

export default Footer;
