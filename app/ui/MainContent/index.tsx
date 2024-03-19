import React, { FC, useState, useEffect } from "react";
import { SideListArea } from "../SideListArea";
import {
  EstateCardType,
  detailData,
  detailDataList,
  detailDataType,
} from "../../data";
import { RealEstateCard } from "@/app/components/RealEstateCard";
import GoogleMap from "../GoogleMap/GoogleMap";
import { SelectedCard } from "../SelectedCard";
import { useTenants } from "@/app/context";

export const MainContent: FC = () => {
  const [selectedCardNumber, setSelectedCardNumber] = useState<number>(0);
  const { tenants, tenantsLoading } = useTenants();

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
        {tenantsLoading ? (
          <p>Loading...</p>
        ) : tenants.length === 0 ? (
          <p>No tenants</p>
        ) : (
          <SideListArea>
            {tenants.map((tenant, index) => {
              return (
                <RealEstateCard
                  key={index}
                  estateData={{
                    id: tenant.id,
                    title: tenant.title,
                    address: tenant.address,
                    price: tenant.rent.toString(),
                    nearest_station: tenant.name_station,
                    image_url: tenant.images,
                    description: tenant.description,
                  }}
                  index={index + 1}
                />
              );
            })}
          </SideListArea>
        )}

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
