import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PluginLoader from "./components/PluginLoader";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <PluginLoader />
      <Footer />
    </div>
  );
}

export default App;