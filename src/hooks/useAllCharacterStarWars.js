import { useState, useEffect } from 'react';
import { getAllCharacter } from '../services/starWars'

// Custom Hook design patterns
export const useAllCharacterStarWars = (endpoint) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchingData();
    }, [])
    
    const fetchingData = async () => {
        try {
            const result = await getAllCharacter(endpoint);
            setData(result)
        } catch (error) {
            console.error(error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return { data, isLoading: loading }
}