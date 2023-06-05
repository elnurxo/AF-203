import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from './context/UserContext';
import { ROUTES } from "./routes/routes";

const routes = createBrowserRouter(ROUTES);

function App() {

  return (
    <UserContextProvider>
      <RouterProvider router={routes}/>
    </UserContextProvider>
  )
}

export default App
