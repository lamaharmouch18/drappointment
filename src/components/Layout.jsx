// REHAM & LAMA - Layout wrapper (Navbar + Footer around pages)

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation bar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;

