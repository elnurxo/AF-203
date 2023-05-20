import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ROUTES } from "./routes";
import { ArtistContextProvider } from "./context/ArtistContext";

const routes = createBrowserRouter(ROUTES)


function App() {
  return (
    <ArtistContextProvider>
      <RouterProvider router={routes}/>
    </ArtistContextProvider>
  );
}

export default App;
