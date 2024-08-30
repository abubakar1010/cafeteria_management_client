import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <HelmetProvider>
        <div className=" container mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
