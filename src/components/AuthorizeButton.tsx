import React, { useState, useEffect } from "react";
import auth from "../utils/auth";
import getCookieValue from "../utils/getCookie";
import "../styles/AuthorizeButton.css";

const AuthorizeButton: React.FC = () => {
    const [authorized, setAuthorized] = useState<boolean>(false);
    
    const authorizedClass = authorized ? "authorized" : "unauthorized";
    const buttonText = authorized ? "Authorized" : "Authorize";

    useEffect(() => {
        checkAuthorization();
    },[])

    const checkAuthorization = () => {
        const token = getCookieValue("token");
        setAuthorized(!!token);
    };

    const handleAuthClick = async () => {
        try {
            await auth();
            checkAuthorization(); 
        } catch (error) {
            console.error("Authorization failed", error);
        }
    };


    return (
        <button className={`auth-button ${authorizedClass}`} onClick={handleAuthClick}>
            {buttonText}
        </button>
    );
};

export default AuthorizeButton;
