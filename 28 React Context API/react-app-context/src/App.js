import { ModeContextProvider } from "./context/ModeContext";
import { UserContextProvider } from "./context/UserContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BasketContextProvider } from "./context/BasketContext";

function App() {
  return (
    <ModeContextProvider>
      <UserContextProvider>
        <BasketContextProvider>
          <Navbar />
          <Home />
        </BasketContextProvider>
      </UserContextProvider>
    </ModeContextProvider>
  );
}

export default App;
