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


    // --------------------------------
    // FETCH LOGGED-IN USER
    // --------------------------------

    useEffect(() => {

        const fetchUser = async () => {

            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {

                console.log("Fetching authenticated user...");

                const response = await axios.get(
                    "http://localhost:3000/api/users",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                console.log(
                    "Authenticated user response:",
                    response.data
                );


                /*
                 * Your backend may return:
                 *
                 * { user: {...} }
                 *
                 * OR directly:
                 *
                 * {...}
                 */

                const authenticatedUser =
                    response.data.user ||
                    response.data;


                if (!authenticatedUser) {
                    throw new Error(
                        "User data not found"
                    );
                }


                setUser(authenticatedUser);

            } catch (error) {

                console.error(
                    "Authentication failed:",
                    error.response?.data ||
                    error.message
                );

                localStorage.removeItem("token");

                setToken(null);
                setUser(null);

            } finally {

                setLoading(false);

            }

        };


        fetchUser();

    }, [token]);


    // --------------------------------
    // LOGIN
    // --------------------------------

    const login = async (email, password) => {

        try {

            const response = await axios.post(
                "http://localhost:3000/api/users",
                {
                    email,
                    password
                }
            );


            console.log(
                "Login response:",
                response.data
            );


            const {
                token,
                payload
            } = response.data;


            if (!token) {
                throw new Error(
                    "Token not received"
                );
            }


            // Save token

            localStorage.setItem(
                "token",
                token
            );


            // Update React state

            setToken(token);
            setUser(payload);


            console.log(
                "Logged in user:",
                payload
            );


            return {
                success: true,
                user: payload
            };


        } catch (error) {

            console.error(
                "Login failed:",
                error.response?.data?.error ||
                error.message
            );


            return {
                success: false,
                error:
                    error.response?.data?.error ||
                    "Login failed"
            };

        }

    };


    // --------------------------------
    // LOGOUT
    // --------------------------------

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


// --------------------------------
// CUSTOM HOOK
// --------------------------------

export const useAuth = () => {

    const context =
        useContext(AuthContext);

    if (!context) {

        throw new Error(
            "useAuth must be used inside AuthProvider"
        );

    }

    return context;

};


export default AuthContext;