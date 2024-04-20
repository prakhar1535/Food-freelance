// Import necessary React and React-Leaflet components
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

// Define the position for the marker
const position = [28.749472, 77.056534];

// Define the SimpleExample component
function SimpleExample() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.038989567959!2d77.06365127668714!3d28.71838077561798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d068da6bc6b17%3A0xb620a44f7dd66c46!2sMaharaja%20Agrasen%20Institute%20of%20Management!5e0!3m2!1sen!2sin!4v1713367642057!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

// Export the SimpleExample component
export default SimpleExample;
