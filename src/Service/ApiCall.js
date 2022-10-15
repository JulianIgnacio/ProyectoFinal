import axios from "axios";

export const login = async () => {
    const data = await axios.get("http://localhost:5500/login")
    return data;
}