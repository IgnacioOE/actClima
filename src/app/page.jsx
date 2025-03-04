'use client'
import { useState } from "react";
import {useWeatherApi} from './hooks/apiClima';
import Tarjeta from './components/tarjeta';

export default function Home() {
  const [search, setSearch] = useState('');
  const { cities, error, isLoading, fetchWeatherData} = useWeatherApi();

  const handleSearch = async (e) => {
    e.preventDefault();

    const success = await fetchWeatherData(search);
    if (success) {
      setSearch('');
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-top gap-2 pt-10">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ingrese la ciudad..."
          disabled={isLoading}
          className="p-2 border-gray-300 bg-gray-100 text-gray-900"
        />
        <button type="submit" disabled={isLoading} className="p-2 bg-blue-500 text-white hover:bg-blue-700">
          Buscar
        </button>
      </form>
      {isLoading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {cities && cities.map((city,index) => (
         <Tarjeta key={index} city={city} />
      ))}
    </div>
  );
}
