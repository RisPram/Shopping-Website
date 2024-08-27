import { useState, useEffect } from "react";
import AllSWRoutes from "./routes";

const Index = () => {
  useEffect(() => {
    document.title = "Shopping Website";
  }, []);

 return (
    <>
      
      {/* header */}
        <AllSWRoutes/>
        {/* footer */}
        {/* back to top */}
        
      
    </>
  );
};

export default Index;
