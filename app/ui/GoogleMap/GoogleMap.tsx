import {
  GoogleMap as GoogleMapComponent,
  InfoWindowF,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import React, { FC, useState } from "react";
import { useMap } from "./useMap";
import Image from "next/image";

type Props = {
  center: { lat: number; lng: number };
  tenantsList: {
    title: string;
    defaultPosition: { lat: number; lng: number };
  }[];
};

const addressMarkerLabel: google.maps.MarkerLabel = {
  text: "●",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "bold",
  color: "#000",
};

const GoogleMap: FC<Props> = (props) => {
  const { tenantsList, center } = props;
  const { isLoaded, onLoad } = useMap({
    defaultPosition: center,
  });

  const [selectedTenant, setSelectedTenant] = useState<{
    title: string;
    defaultPosition: { lat: number; lng: number };
  } | null>(null);

  const containerStyle = {
    width: "100%",
    height: "80vh",
  };

  console.log("tenantsList", tenantsList);

  return (
    <>
      {isLoaded ? (
        <GoogleMapComponent
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          zoom={20}
          center={center}
        >
          {tenantsList.map((tenant, index) => {
            return (
              <Marker
                key={index}
                visible={true}
                onLoad={(marker) => {
                  console.log(marker);
                }}
                position={tenant.defaultPosition}
                // label={addressMarkerLabel}
                onClick={() => setSelectedTenant(tenant)}
              />
            );
          })}
          {selectedTenant && (
            <InfoWindowF
              position={selectedTenant.defaultPosition}
              onCloseClick={() => setSelectedTenant(null)}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {selectedTenant.title}
                </p>
              </div>
            </InfoWindowF>
          )}
        </GoogleMapComponent>
      ) : (
        "loading"
      )}
    </>
  );
};

export default React.memo(GoogleMap);
