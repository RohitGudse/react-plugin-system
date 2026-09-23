import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const sidebarContent = {
    title: "Plugins Menu",
    items: [
      "Dashboard",
      "Plugins",
      "Settings",
      "Profile",
    ],
  };

  return (
    <motion.aside
      className="sidebar"
      initial={{
        opacity: 0,
        x: -150,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="sidebar-header">
        <h2>{sidebarContent.title}</h2>
      </div>

      <nav className="sidebar-navigation">
        <ul>
          {sidebarContent.items.map((item, index) => (
            <motion.li
              key={`${item}-${index}`}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
            >
              <button type="button" className="sidebar-link">
                {item}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;