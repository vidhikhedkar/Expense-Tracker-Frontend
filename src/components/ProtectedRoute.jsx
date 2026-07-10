import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getProfile } from "../api/api";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getProfile();
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return authenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;