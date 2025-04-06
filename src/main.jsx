import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Plans from "./components/Plans.jsx";  // ✅ Added Plans
import Account from "./components/Account.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<App />}>
      <Route index element={<Home />} /> {/* ✅ Shorthand for Home */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="plans" element={<Plans />} />  {/* ✅ Fixed missing route */}
      <Route path="account" element={<Account />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
