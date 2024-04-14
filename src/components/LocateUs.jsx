// Import necessary React and React-Leaflet components
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Define the position for the marker
const position = [28.749472, 77.056534];

// Define the SimpleExample component
function SimpleExample() {
 return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
 );
}

// Export the SimpleExample component
export default SimpleExample;
