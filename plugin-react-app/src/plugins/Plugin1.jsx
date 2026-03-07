import { motion } from "framer-motion";

function Plugin1() {
  return (
    <motion.div
      className="plugin"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3>Plugin 1</h3>
    </motion.div>
  );
}

export default Plugin1;