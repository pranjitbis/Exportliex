"use client";

import { useEffect, useState } from "react";
import styles from "./CountryMap.module.css";
import "leaflet/dist/leaflet.css";

const countries = [
  { name: "United States", lat: 37.0902, lng: -95.7129 },
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "Germany", lat: 51.1657, lng: 10.4515 },
  { name: "United Arab Emirates", lat: 23.4241, lng: 53.8478 },
  { name: "Australia", lat: -25.2744, lng: 133.7751 },
];

export default function CountryMapClient() {
  const [MapComponents, setMapComponents] = useState(null);

  useEffect(() => {
    // Dynamically import ONLY on client
    import("react-leaflet").then((mod) => {
      setMapComponents({
        MapContainer: mod.MapContainer,
        TileLayer: mod.TileLayer,
        CircleMarker: mod.CircleMarker,
        Popup: mod.Popup,
      });
    });
  }, []);

  if (!MapComponents) return null;

  const { MapContainer, TileLayer, CircleMarker, Popup } = MapComponents;

  return (
    <section className={styles.mapSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Global Service Coverage</h2>
        <p className={styles.description}>
          Delivering logistics services across key international markets.
        </p>
      </div>

      <div className={styles.mapWrapper}>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {countries.map((c, i) => (
            <CircleMarker
              key={i}
              center={[c.lat, c.lng]}
              radius={6}
              pathOptions={{
                color: "#2563eb",
                fillColor: "#2563eb",
                fillOpacity: 1,
              }}
            >
              <Popup>{c.name}</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
