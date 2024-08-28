import { useState, useEffect } from "react";
import AllSWRoutes from "./routes";
import Header from "./ReusableComponents/Header";
import Footer from "./ReusableComponents/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Shopping Website";
  }, []);

 return (
    <>
      
      <Header/>
        <AllSWRoutes/>
        <Footer/>
        {/* back to top */}
        
      
    </>
  );
};

export default Index;
