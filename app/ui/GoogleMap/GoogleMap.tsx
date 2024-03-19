import {
  GoogleMap as GoogleMapComponent,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import React, { FC } from "react";
import { useMap } from "./useMap";
import Image from "next/image";

type Props = { title: string; defaultPosition: { lat: number; lng: number } };
const addressMarkerLabel: google.maps.MarkerLabel = {
  text: "",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "bold",
};

const nearestStationMarkerLabel: google.maps.MarkerLabel = {
  text: "",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "bold",
};

const GoogleMap: FC<Props> = (props) => {
  const { title, defaultPosition } = props;
  const { isLoaded, onLoad } = useMap({
    defaultPosition: props.defaultPosition,
  });

  const containerStyle = {
    width: "100%",
    height: "80vh",
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMapComponent
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          zoom={200}
          center={props.defaultPosition}
        >
          {/* <MarkerF
            position={props.defaultPosition}
            label={addressMarkerLabel}
          />
          <MarkerF
            position={props.nearestStationPosition}
            label={nearestStationMarkerLabel}
          /> */}
          <InfoWindowF position={defaultPosition}>
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
                会社のロゴ
              </p>
            </div>
          </InfoWindowF>
        </GoogleMapComponent>
      ) : (
        "loading"
      )}
    </>
  );
};

export default React.memo(GoogleMap);
