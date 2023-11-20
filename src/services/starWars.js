import axios from 'axios';
import { urlApiStarWars } from "../utils/urlsApi";

export const getAllCharacter = async (endpoint) => {
    try {
        const { data } = await axios.get(urlApiStarWars + endpoint);
        return data
    } catch (error) {
        console.log(error)
    }
}