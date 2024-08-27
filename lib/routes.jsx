import { useRoutes } from "react-router-dom";
import LandingPage from "./LandingPage";

const AllSWRoutes = (props) => {
  let routes = useRoutes([
    
    {
      path: "/",
      element: <LandingPage />,
    },

    
//coming soon
    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // }, 
    
  ]);

  return routes;
};
export default AllSWRoutes;
