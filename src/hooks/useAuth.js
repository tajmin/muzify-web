import { useContext } from "react";
import { AuthContext } from "../context/AuthProivder";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;