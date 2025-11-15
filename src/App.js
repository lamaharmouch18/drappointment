// REHAM & LAMA - Main application file

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout (wraps pages with Navbar + Footer)
import Layout from "./Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* About page */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        {/* Services page */}
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />

        {/* All doctors list */}
        <Route
          path="/doctors"
          element={
            <Layout>
              <Doctors />
            </Layout>
          }
        />

        {/* Single doctor details page, ex: /doctors/1 */}
        <Route
          path="/doctors/:id"
          element={
            <Layout>
              <DoctorDetail />
            </Layout>
          }
        />

        {/* Contact / appointment page */}
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* Login page (no need for layout if you want it full screen) */}
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* 404 - page not found */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
