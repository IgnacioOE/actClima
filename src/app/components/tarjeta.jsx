import React from 'react';
import { useState } from 'react';

export default function Tarjeta({city}) {
    const [removed, setRemoved] = useState(false);
    
    const handleRemove = () => {
        setRemoved(true);
    };

    if (removed) {
        return null;
    }

    return(
        <div className="relative p-2 w-90 h-30 rounded border-2 border-blue-500 bg-gray-100">
            <button 
                onClick={handleRemove}
                className="absolute top-0 right-3 items-right text-red-500 hover:text-red-800"
            >
                x
            </button>
            <h3 className="font-bold text-gray-700">
                {city.location.name}, {city.location.region}, {city.location.country}
            </h3>
            <p className="font-bold text-xl text-blue-700">
                {city.current.temp_c}°C
            </p>
            <p className="font-bold text-gray-500">
                {city.current.condition.text}
            </p>
        </div>
    );
}