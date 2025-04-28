// src/App.tsx

import { useState } from 'react';
import CondoCard from './components/condocard';
import Filter from './components/filterbar';
import { condoData } from './data/condos';

const App = () => {
  const [filters, setFilters] = useState({ bedrooms: 0, minPrice: 0, maxPrice: 10000000 });

  const filteredCondos = condoData.filter((condo) =>
    (filters.bedrooms === 0 || condo.bedrooms === filters.bedrooms) &&
    condo.price >= filters.minPrice &&
    condo.price <= filters.maxPrice
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">🏠 CondoFinder</div>
          <div className="space-x-6">
            <button className="text-gray-600 hover:text-black">Buy</button>
            <button className="text-gray-600 hover:text-black">Rent</button>
            <button className="text-gray-600 hover:text-black">Sell</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-300 flex flex-col items-center justify-center h-[400px] text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Condo</h1>
        <p className="text-gray-700 mb-6">Discover luxury condos in prime locations with the amenities you desire.</p>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4">
          <input type="text" placeholder="Search by location..." className="border rounded-lg px-4 py-2 w-64" />
          <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-lg px-4 py-2">
            Search
          </button>
        </div>
      </section>

      {/* Featured Condos + Filters */}
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
  );
};

export default App;
