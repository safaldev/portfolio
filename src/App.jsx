import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@/components/theme-provide";
import BackTop from "@/components/BackTop"


export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
        <Header />
        <BackTop />
        <Footer />
      </ThemeProvider>
    </>
  );
}
