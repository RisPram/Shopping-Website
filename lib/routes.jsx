import {useEffect} from "react"
import { useRoutes } from "react-router-dom";
import LandingPage from "./LandingPage";
import PageNotFound from "./ReusableComponents/PageNotFound";

const AllSWRoutes = () => {
    useEffect(()=>{

    window.scroll({ top: 0, left: 0, behavior: "smooth" });

    },[])
  let routes = useRoutes([
    
    {
      path: "/",
      element: <LandingPage />,
    },

    
    {
      path: "*",
      element: <PageNotFound />,
    }, 
    
  ]);

  return routes;
};
export default AllSWRoutes;
