import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [autoLogin, setAutoLogin] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <LoginContext.Provider value={{ email, setEmail, password, setPassword, autoLogin, setAutoLogin, isModalOpen, setIsModalOpen }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);
