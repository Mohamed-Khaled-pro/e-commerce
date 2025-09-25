import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.value);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!user) {
      toast.error("You must log in first!");
      setAllowed(false);
    } else {
      setAllowed(true);
    }
  }, [user]);

  return allowed ? children : null; 
}
