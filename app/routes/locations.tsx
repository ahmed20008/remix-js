import { useLoaderData } from "@remix-run/react";
import { fetchLocations } from "../api/locationApi";
import { useState } from "react";
import { Input } from "~/components/atoms";
import { Location } from "~/components/molecules/LocationCard";

export const loader = async () => {
  return fetchLocations();
};

export default function LocationsPage() {
  const locations = useLoaderData<typeof loader>();
  const [filters, setFilters] = useState({ type: "", dimension: "" });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const filteredLocations = locations.filter((loc: any) =>
    loc.type.toLowerCase().includes(filters.type.toLowerCase()) &&
    loc.dimension.toLowerCase().includes(filters.dimension.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">All Locations</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input 
          value={filters.type} 
          onChange={(e) => handleFilterChange("type", e.target.value)} 
          placeholder="Filter by type..." 
          type="text" 
          className="p-2 w-full max-w-md rounded-lg bg-gray-800 text-white border border-gray-600"
        />
        <Input 
          value={filters.dimension} 
          onChange={(e) => handleFilterChange("dimension", e.target.value)} 
          placeholder="Filter by dimension..." 
          type="text" 
          className="p-2 w-full max-w-md rounded-lg bg-gray-800 text-white border border-gray-600"
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredLocations.map((loc: any) => (
          <div key={loc.id} className="border p-4 rounded-lg shadow bg-gray-800">
            <h2 className="text-lg font-semibold text-green-400">{loc.name}</h2>
            <p className="text-gray-400">Type: {loc.type}</p>
            <p className="text-gray-400">Dimension: {loc.dimension}</p>
            <div className="mt-4">
              <h3 className="text-md font-semibold text-blue-400">Residents:</h3>
              <ul className="mt-2">
                {loc.residents.length > 0 ? (
                  loc.residents.map((resident: any) => (
                    <li key={resident.id} className="flex items-center gap-4 p-2 border-b border-gray-700">
                      <img src={resident.image} alt={resident.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <p className="text-white font-medium">{resident.name}</p>
                        <p className="text-gray-400 text-sm">{resident.status} | {resident.species} | {resident.gender}</p>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No known residents</p>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}