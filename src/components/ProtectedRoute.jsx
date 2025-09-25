import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.value);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!user) {
      setAllowed(false);
    } else {
      setAllowed(true);
    }
  }, [user]);

  return allowed ? children : null; 
}
