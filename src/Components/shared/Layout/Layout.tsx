import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./layout.scss";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
