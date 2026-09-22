import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const headerTitle = "Plugin Based React App";
  const headerDescription =
    "A modern React application built with a plugin-based architecture.";

  const animationSettings = {
    initial: {
      opacity: 0,
      y: -80,
      scale: 0.95,
    },

    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  };

  return (
    <motion.header
      className="header"
      initial={animationSettings.initial}
      animate={animationSettings.animate}
      transition={animationSettings.transition}
    >
      <div className="header-container">
        <div className="header-content">
          <motion.div
            className="header-text"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <span className="header-label">React Application</span>

            <h1 className="header-title">
              {headerTitle}
            </h1>

            <p className="header-description">
              {headerDescription}
            </p>
          </motion.div>

          <motion.div
            className="header-status"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Active</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;