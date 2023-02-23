import styles from "../styles/Animate.module.css";
const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-gradient-to-r from-primary to-secondary text-base-content h-[88px]">
      <div>
        <p className={`text-xl ${styles.rainbow}`}>
          Built with 🤍 by{" "}
          <a
            href="https://github.com/Abbas-Khann"
            target="_blank"
            rel="noreferrer"
          >
            Abbas Khan{" "}
          </a>
          &{" "}
          <a href="https://github.com/CJskii" target="_blank" rel="noreferrer">
            CJski
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
