import React from 'react'
import { members } from '../data/members'

function Member() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-red-700 drop-shadow-md mb-12">
        รายชื่อสมาชิกทีม
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-5 border-4 border-red-200 shadow-sm"
            />
            <h2 className="text-2xl font-bold text-red-800">{member.name}</h2>
            <p className="text-gray-500 mt-2">รหัสนักศึกษา: {member.id}</p>
            <p className="text-gray-700 mt-1 font-medium">หน้าที่: {member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Member