"use client";

import React, { useMemo } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default markers in React-Leaflet
if (typeof window !== "undefined") {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
    iconUrl: "/leaflet/images/marker-icon.png",
    shadowUrl: "/leaflet/images/marker-shadow.png",
  });
}

const ClientMap = ({
  geoJsonData,
  onEachCountry,
  pointToLayer,
  center = [39.8283, -98.5795],
  zoom = 3,
}) => {
  // Only render on client side
  if (typeof window === "undefined") {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#f3f4f6",
          borderRadius: "0.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6b7280",
          fontSize: "0.875rem",
        }}
      >
        Loading map...
      </div>
    );
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={geoJsonData}
        onEachFeature={onEachCountry}
        pointToLayer={pointToLayer}
      />
    </MapContainer>
  );
};

export default ClientMap;
