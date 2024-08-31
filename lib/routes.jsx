import { useRoutes } from "react-router-dom";
import LandingPage from "./LandingPage";
import PageNotFound from "./ReusableComponents/PageNotFound";

const AllSWRoutes = (props) => {
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
