import React from 'react';
import Navbar from './components/NavBar'
import MainViewer from './components/viewers/MainViewer'


const EmergencyNoteApp: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-5">
      <Navbar/>
      <MainViewer/>
    </div>
  );
};

export default EmergencyNoteApp;