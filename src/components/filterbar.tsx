// src/components/Filter.tsx

interface FilterProps {
    filters: {
      bedrooms: number;
      minPrice: number;
      maxPrice: number;
    };
    setFilters: (filters: { bedrooms: number; minPrice: number; maxPrice: number }) => void;
  }
  
  const Filter = ({ filters, setFilters }: FilterProps) => {
    return (
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={filters.bedrooms}
          onChange={(e) => setFilters({ ...filters, bedrooms: Number(e.target.value) })}
          className="border rounded-lg px-4 py-2"
        >
          <option value={0}>Bedrooms (All)</option>
          <option value={1}>1 Bedroom</option>
          <option value={2}>2 Bedrooms</option>
          <option value={3}>3 Bedrooms</option>
          <option value={4}>4+ Bedrooms</option>
        </select>
  
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
          className="border rounded-lg px-4 py-2"
        />
  
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          className="border rounded-lg px-4 py-2"
        />
      </div>
    );
  };
  
  export default Filter;
  
  