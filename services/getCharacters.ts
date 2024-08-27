import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
})

export const getCharacters = async () => {
    try {
        const response = await api.get("/character")
        return response.data.results
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
}