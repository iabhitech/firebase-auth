import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
