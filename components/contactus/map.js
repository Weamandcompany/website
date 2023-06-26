import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function MyComponent({ latitude, longitude }) {
  const [apiLoaded, setApiLoaded] = useState(false);
  const [center, setCenter] = useState({ lat: latitude, lng: longitude });

  useEffect(() => {
    setCenter({ lat: latitude, lng: longitude });
  }, [latitude, longitude]);

  const containerStyle = {
    width: "100%",
    height: "237px",
    borderRadius: "4px",
  };

  if (!apiLoaded) {
    return (
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
        onLoad={() => {
          setApiLoaded(true);
        }}
        key={`${latitude}-${longitude}`} // Add key prop to force re-mount
      />
    );
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers etc. */}
    </GoogleMap>
  );
}

export default React.memo(MyComponent);
