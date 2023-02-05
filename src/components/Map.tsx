import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

type Props = {};

const Map = (props: Props) => {
  if (!process.env.NEXT_PUBLIC_MAPS_API_KEY) throw new Error("Missing API key");
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
