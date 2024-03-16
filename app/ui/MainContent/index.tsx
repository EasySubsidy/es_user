import React, { FC, useState } from "react";
import { SideListArea } from "../SideListArea";
import {
  EstateCardType,
  EstateDatum,
  detailData,
  detailDataList,
  detailDataType,
} from "../../data";
import { RealEstateCard } from "@/app/components/RealEstateCard";
import GoogleMap from "../GoogleMap/GoogleMap";
import GoogleMapMini from "../GoogleMapMini/GoogleMapMini";
import { SelectedCard } from "../SelectedCard";

const estateData: EstateCardType[] = EstateDatum;

export const MainContent: FC = () => {
  const [selectedCardNumber, setSelectedCardNumber] = useState<number>(0);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#E4E4E4",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "48px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "1920px",
          // backgroundColor: "#E4E4E4",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          // justifyContent: "center",
          gap: "48px",
        }}
      >
        <SideListArea>
          {detailDataList.map((data: detailDataType, index: number) => {
            return (
              <RealEstateCard
                key={index}
                estateData={{
                  id: data.id,
                  title: data.title,
                  address: data.address,
                  price: data.price,
                  nearest_station: data.nearestStationInfo.title,
                  image_url: data.image_url,
                  description: data.description,
                }}
                index={index + 1}
              />
            );
          })}
        </SideListArea>
        <div
          style={{
            width: "100%",
            height: "auto",
            // backgroundColor: "#ECECEC",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "120px 64px",
            gap: "32px",
          }}
        >
          <GoogleMap
            title="GoogleMap"
            defaultPosition={{
              lat: 35.6600893,
              lng: 139.6952692,
            }}
          />
          <SelectedCard
            detailEstateData={detailDataList[selectedCardNumber]}
            index={selectedCardNumber + 1}
          />
          {/* <GoogleMapMini
            zoom={15}
            defaultInfo={{
              title: "GoogleMapMini",
              address: "東京都新宿区西新宿",
              defaultPosition: {
                lat: 35.6600893,
                lng: 139.6952692,
              },
            }}
            nearestStationInfo={{
              title: "GoogleMapMini",
              address: "東京都新宿区西新宿",
              nearestStationPosition: {
                lat: 35.6600893,
                lng: 139.6952692,
              },
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};
