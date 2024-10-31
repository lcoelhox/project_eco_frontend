import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import './Map.css';

const API_KEY_GOOGLE = "AIzaSyCMGhJTw4JLvfy9BKpnX2czmPlXkX6o9o4";

const LINK_BANCKEND = "https://project-eco-backend.onrender.com"
// const LINK_BANCKEND = "http://localhost:3000"

const Map = () => {
  const center = {
    lat: -20.3294,
    lng: -40.2927,
  };

  const [selectedPoints, setSelectedPoints] = useState([]);

  useEffect(() => {
      const getLocations = async () => {
        const locations = await axios.get(`${LINK_BANCKEND}/locations`)
        setSelectedPoints(locations.data);
      }

      getLocations();
  }, []);

  const mapRef = useRef(null);

  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />

      <LoadScript googleMapsApiKey={API_KEY_GOOGLE}>
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
          onLoad={handleMapLoad}
        >
          {selectedPoints && selectedPoints.map((point) => (
            <Marker
              key={point.id}
              position={{
                lat: point.latitude,
                lng: point.longitude,
              }}
              title={point.name}
              onClick={`${point.name}`}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      <Footer />
    </div>
  );
};

export default Map;
