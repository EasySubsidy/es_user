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
  const [selectedCardList, setSelectedCardList] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    // 選択中の場合は選択解除
    if (selectedCardList.includes(index)) {
      setSelectedCardList(selectedCardList.filter((i) => i !== index));
      return;
    } else {
      setSelectedCardList([...selectedCardList, index]);
    }
  };

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
        padding: "64px",
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
                  subsidy_amount: data.subsidy_amount,
                  image_url: data.image_url,
                  description: data.description,
                  zoom: data.zoom,
                  defaultInfo: data.defaultInfo,
                  nearestStationInfo: data.nearestStationInfo,
                }}
                displayIndex={index + 1}
                onSelect={() => handleCardClick(index)}
                isSelected={selectedCardList.includes(index)}
              />
            );
          })}
        </SideListArea>
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 240px)",
            // backgroundColor: "#ECECEC",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // padding: "120px 64px",
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
          {/* <SelectedCard
            detailEstateData={detailDataList[selectedCardList]}
            index={selectedCardList + 1}
          /> */}
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
