import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Plans from "./components/Plans.jsx";
import Account from "./components/Account.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<HashRouter basename="/Telecom_Project">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="plans" element={<Plans />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);