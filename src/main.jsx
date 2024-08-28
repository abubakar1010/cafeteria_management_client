import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <div className=" container mx-auto">
      <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </StrictMode>
);
