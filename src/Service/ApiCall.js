import axios from "axios";

export const login = async () => {
    await axios.post("http://localhost:5500/login");
}

export const registeruser = async (user) => {
    await axios.post("http://localhost:5500/register",user);
}