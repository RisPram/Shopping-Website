import { useState, useEffect } from "react";
import AllSWRoutes from "./routes";
import Header from "./ReusableComponents/Header";
import Footer from "./ReusableComponents/Footer";
import BackToTop from "./ReusableComponents/BackToTop";

const Index = () => {
  useEffect(() => {
    document.title = "Shopping Website";
  }, []);

 return (
    <>
      
      <Header/>
      <section className="relative">
        <AllSWRoutes/>
        <Footer/>
        <BackToTop/>
        </section>
        
      
    </>
  );
};

export default Index;
