// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Mainpage from './components/mainpage';
import Member from './components/member';


const App = () => {
 
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/member" element={<Member />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
