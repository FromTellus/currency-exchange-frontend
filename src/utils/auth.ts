import { Token } from "../types/token";

const authorize = async () => {
  try {
    const response = await fetch(`http://localhost:3000/login`, {
      method: "POST",
    });
    const data = await response.json();
    if (data) {
      const newToken: Token = {
        token: data.token,
        issued: data.issued,
        expires: data.expires,
      };
      console.log(newToken);
      document.cookie =
        "token=" +
        data.token +
        ";expires=" +
        new Date(data.expires).toUTCString() +
        ";path=/;issued=" +
        data.issued;
      return newToken;
    }
  } catch (error) {
    console.error("Failed to fetch countries:", error);
  }
};

export default authorize;
