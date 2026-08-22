import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        () => localStorage.getItem("token")
    );

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Get the logged-in user's information
    // when the application starts
    useEffect(() => {
        const fetchUser = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    "http://localhost:3000/api/users",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setUser(response.data.user);
            } catch (error) {
                console.error("Authentication failed:", error);

                // Token is invalid/expired
                localStorage.removeItem("token");
                setToken(null);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [token]);

    // Login
    const login = async (email, password) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/users",
                {
                    email,
                    password
                }
            );

            const { token, payload } = response.data;

            // Store token
            localStorage.setItem("token", token);

            // Store in React state
            setToken(token);
            setUser(payload);

            return {
                success: true,
                user: payload
            };
        } catch (error) {
            console.error(
                "Login failed:",
                error.response?.data?.error || error.message
            );

            return {
                success: false,
                error:
                    error.response?.data?.error ||
                    "Login failed"
            };
        }
    };

    // Logout
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                loading,
                login,
                logout,
                isAuthenticated: !!token
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
};

export default AuthContext;