
import Filter from "./filterbar";
import CondoCard from "./condocard";
import { condoData } from "../data/condos";
import { useState } from "react";

function Mainpage() {

  
  const [filters, setFilters] = useState({ bedrooms: 0, minPrice: 0, maxPrice: 30000000 });
  const filteredCondos = condoData.filter((condo) =>
      (filters.bedrooms === 0 || condo.bedrooms === filters.bedrooms) &&
      condo.price >= filters.minPrice &&
      condo.price <= filters.maxPrice
    );
  return (
    <div>
    <section
        className="relative h-[400px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/627892060/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B5%E0%B8%97%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1.jpg?s=1024x1024&w=is&k=20&c=RotgnisUwjDXd10TwSmcQD4aYHAcrjcBSY_zpmj6J0Y=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-red-900/40 backdrop-blur-sm" />

        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Find Your Perfect Condo</h1>
          <p className="mb-6 drop-shadow">Discover luxury condos in prime locations with the amenities you desire.</p>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4 bg-opacity-40 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Search by location..."
              className="border rounded-lg px-4 py-2 w-64 bg-transparent text-gray-700 placeholder:text-gray-400"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2">
              Search
            </button>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Featured Condos</h2>
        <p className="text-gray-600 mb-8">Browse our selection of premium condos available now.</p>

        <Filter filters={filters} setFilters={setFilters} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCondos.map((condo) => (
            <CondoCard key={condo.id} condo={condo} />
          ))}
        </div>
      </main>
      </div>
      
      
  )
}

export default Mainpage