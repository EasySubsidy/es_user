import {
  GoogleMap as GoogleMapComponent,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import React, { FC } from "react";
import { useMapMini } from "./useMapMini";
import Image from "next/image";

type Props = {
  zoom: number;
  defaultInfo: {
    title: string;
    address: string;

    defaultPosition: {
      lat: number;
      lng: number;
    };
  };
  nearestStationInfo: {
    title: string;
    address: string;
    nearestStationPosition: {
      lat: number;
      lng: number;
    };
  };
};

const GoogleMapMini: FC<Props> = (props) => {
  const { zoom, defaultInfo, nearestStationInfo } = props;
  const { isLoaded, onLoad } = useMapMini({
    defaultPosition: defaultInfo.defaultPosition,
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
          zoom={zoom}
          center={defaultInfo.defaultPosition}
        >
          {/* <MarkerF
            position={props.defaultPosition}
            label={addressMarkerLabel}
          />
          <MarkerF
            position={props.nearestStationPosition}
            label={nearestStationMarkerLabel}
          /> */}
          <InfoWindowF position={defaultInfo.defaultPosition}>
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
                {defaultInfo.title}
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

export default React.memo(GoogleMapMini);
