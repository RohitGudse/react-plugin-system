import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>© 2026 Plugin React App</p>
    </motion.div>
  );
}

export default Footer;