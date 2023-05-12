import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES.js";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
