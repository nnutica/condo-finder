import React from 'react'
import { members } from '../data/members'

function Member() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-center">รายชื่อสมาชิกทีม</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {members.map((member) => (
        <div
          key={member.id}
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{member.name}</h2>
          <p className="text-gray-600">รหัสนักศึกษา: {member.id}</p>
          <p className="text-gray-800 mt-1">หน้าที่: {member.role}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Member