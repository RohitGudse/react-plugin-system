import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Plugin Based React App</h1>
    </motion.div>
  );
}

export default Header;