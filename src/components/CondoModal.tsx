import React from "react";
import { Condo } from "../data/condos";

interface CondoModalProps {
  condo: Condo;
  isOpen: boolean;
  onClose: () => void;
}

const CondoModal: React.FC<CondoModalProps> = ({ condo, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* พื้นหลังเทาจาง + animation fade-in */}
      <div
        className="absolute inset-0   opacity-60 bg-gray-500 transition-opacity duration-300"
        onClick={onClose} // คลิกพื้นหลังก็ปิดได้
      />

      {/* กล่อง modal */}
      <div className="relative z-10 bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <img
          src={condo.image}
          alt={condo.name}
          className="w-full h-48 object-cover rounded mb-4"
        />

        <h2 className="text-2xl font-bold">{condo.name}</h2>
        <p className="text-gray-600 mb-1">📍 {condo.location}</p>
        <p className="text-red-600 font-semibold text-lg mb-4">
          ฿{condo.price.toLocaleString()}
        </p>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
          <div><strong>🛏</strong> {condo.bedrooms}</div>
          <div><strong>🛁</strong> {condo.bathrooms}</div>
          <div><strong>📐</strong> {condo.area} sqft</div>
        </div>

        <p className="text-sm text-gray-500">{condo.description}</p>
      </div>
    </div>
  );
};

export default CondoModal;
