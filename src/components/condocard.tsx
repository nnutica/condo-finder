import { Condo } from "../data/condos";

interface CondoCardProps {
  condo: Condo;
}

const CondoCard = ({ condo }: CondoCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      {/* Image section (placeholder) */}
      <div className="relative h-48 bg-gray-100 flex items-center justify-center">
        <span className="text-sm text-gray-400">Image</span>
        <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">For Sale</span>
      </div>

      {/* Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold text-gray-800">฿{condo.price.toLocaleString()}</p>
          <h3 className="text-sm text-gray-700">{condo.name}</h3>
          <p className="text-sm text-gray-500 mt-1">📍 {condo.location}</p>
          <div className="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span>{condo.bedrooms} Beds</span>
            <span>{condo.bathrooms} Baths</span>
            <span>{condo.area} sqft</span>
          </div>
        </div>

        <button className="mt-4 border border-red-300 text-red-600 text-sm py-2 rounded hover:bg-red-50">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CondoCard;