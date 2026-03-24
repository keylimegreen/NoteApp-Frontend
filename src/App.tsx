import React from 'react';
import Navbar from './components/NavBar'
import MainViewer from './components/MainViewer'


const EmergencyNoteApp: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar/>
      <MainViewer/>
    </div>
  );
};

export default EmergencyNoteApp;