'use client'
import {useState} from "react";

const API_KEY='dde75191d92a45c29d4133118252702';
const BASE_URL='http://api.weatherapi.com/v1/current.json';

export const useWeatherApi=()=>{
    const [cities, setCities]=useState([]);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(false);

    const fetchWeatherData= async (cityName) => {
        setIsLoading(true);
        setError(null);

        try {
            // Mostrar URL, si el sitio se cae o algo parecido muestra error
            const response= await fetch(`${BASE_URL}?key=${API_KEY}&q=${cityName}&aqi=no`);
        
            if (!response.ok) {
                throw new Error('No se encontró la ciudad');
            }

            const data= await response.json();
            setCities([...cities, data]);
            return true;
        }
        catch (error){
            setError(error.message);
            return false;
        }
        finally{
            setIsLoading(false);
        }
    }
    return { cities, error, isLoading, fetchWeatherData };
}