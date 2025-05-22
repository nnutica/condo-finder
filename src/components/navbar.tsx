

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm transition-all">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="font-bold text-2xl text-red-600">🏠 CondoFinder</div>
      <div className="space-x-6">
      <a href='/'><button className="text-lg text-gray-700 hover:text-red-600">Buy</button> </a>
        
       <a href='/member'> <button className="text-lg text-gray-700 hover:text-red-600">Member</button> </a>
      </div>
    </div>
  </header>
  )
}

export default Navbar