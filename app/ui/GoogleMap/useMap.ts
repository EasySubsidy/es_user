import { useJsApiLoader } from "@react-google-maps/api";

export type Map = google.maps.Map;

type Props = {
  defaultPosition: { lat: number; lng: number };
};

export const useMap = ({ defaultPosition }: Props) => {
  // googleMapsApiKeyは自分で取得したものに差し替えてください
  const { isLoaded } = useJsApiLoader({
    id: "google-map",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const onLoad = (map: Map) => {
    // const bounds = new window.google.maps.LatLngBounds(defaultPosition);
    // map.fitBounds(bounds);
    map.setZoom(8);
  };

  return { isLoaded, onLoad };
};
