import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "@clerk/clerk-react";
import Welcome from "./pages/Welcome";
import "./components/navbar.css";
import Result from "./pages/Result";


function App() {
  const { isSignedIn } = useAuth();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isSignedIn ? (
            <Route path="/upload" element={<Welcome />} />
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
