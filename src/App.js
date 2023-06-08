import React from "react";
import LoginScreen from "./pages/ClientsScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ProtectedRoute from "./components/private";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-slate-800 text-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/clients" element={<LoginScreen />} />
          <Route path="/categories" element={<RegisterScreen />} />
        </Routes>
      </Router>
      {/* <Router>
        <Routes>
          <Route
            path="/"
            index
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-in" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;
