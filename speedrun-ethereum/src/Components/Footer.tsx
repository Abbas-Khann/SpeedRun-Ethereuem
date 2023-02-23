import styles from "../styles/Animate.module.css";
const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-gradient-to-r from-primary to-secondary text-base-content h-[88px]">
      <div>
        <p className={`text-xl ${styles.rainbow}`}>
          Created by 🤍 Abbas & CJski
        </p>
      </div>
    </footer>
  );
};
export default Footer;
