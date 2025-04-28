import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom truck icon (optional)
const truckIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/7439/7439676.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

type Truck = {
  lat: number;
  lng: number;
  details?: string;
};

type LeafletMapProps = {
  trucks: Truck[];
};

const LeafletMap: React.FC<LeafletMapProps> = ({ trucks }) => {
  return (
    <MapContainer center={[22.9734, 78.6569]} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {trucks.map((truck, index) => (
        <Marker key={index} position={[truck.lat, truck.lng]} icon={truckIcon}>
          <Popup>
            <strong>Truck #{index + 1}</strong>
            <br />
            {truck.details || 'No additional info'}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
