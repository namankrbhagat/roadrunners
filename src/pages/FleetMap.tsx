// pages/AdminDashboard.tsx
import React from 'react';
import LeafletMap from '../components/maps/LeafletMap';

const trucks = [
  { lat: 28.6139, lng: 77.2090, details: 'Delhi Truck' },
  { lat: 19.0760, lng: 72.8777, details: 'Mumbai Truck' },
  { lat: 13.0827, lng: 80.2707, details: 'Chennai Truck' },
];

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Truck Location Map</h1>
      <LeafletMap trucks={trucks} />
    </div>
  );
};

export default AdminDashboard;
