import { motion } from "framer-motion";

function Sidebar() {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p>Plugins Menu</p>
    </motion.div>
  );
}

export default Sidebar;