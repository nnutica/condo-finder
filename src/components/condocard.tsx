import { Condo } from "../data/condos";

interface CondoCardProps {
  condo: Condo;
}

const CondoCard = ({ condo }: CondoCardProps) => {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80 hover:shadow-lg transition-shadow">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">รูป {condo.image}px</span>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">{condo.name}</h2>
          <p className="text-gray-600">{condo.location}</p>
          <p className="text-gray-800 font-bold mt-2">฿{condo.price.toLocaleString()}</p>
          <div className="flex justify-between mt-4">
            <div className="text-sm text-gray-500">{condo.bedrooms} ห้องนอน</div>
            <div className="text-sm text-gray-500">{condo.bathrooms} ห้องน้ำ</div>
          </div>
          <div className="text-sm text-gray-500 mt-1">{condo.area} ตร.ม.</div>
        </div>
      </div>
    );
  };
  
  export default CondoCard;