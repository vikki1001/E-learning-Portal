import React from 'react';

import Registration from './component/frontend/registration'
import Login from './component/frontend/login'
import Header from './component/backend/layouts/header'
import Navbar from './component/backend/layouts/navbar'
import Dashboard from './component/backend/dashboard'
import Rolelist from './component/backend/roles/rolelist'
import Roleadd from './component/backend/roles/roleadd'
import Footer from './component/backend/layouts/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Navbar />
       <Routes>
            {/* <Route path="/" element={<Registration />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/dashboard" element={<Dashboard /> } />
            <Route path="/rolelist" element={<Rolelist /> } />
            <Route path="/roleadd" element={<Roleadd /> } />
            
            {/* <Route path="/" element={<h1>Logout</h1>} />
            <Route path="/" element={<h1>Profile</h1>} /> */}
           
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
  );
}

export default App;
