import React, { FC, useState, useEffect } from "react";
import { SideListArea } from "../SideListArea";
// import {
//   EstateCardType,
//   detailData,
//   detailDataList,
//   detailDataType,
// } from "../../data";

import GoogleMap from "../GoogleMap/GoogleMap";
import { SelectedCard } from "../SelectedCard";
import { useTenants } from "../../context/tenantContext";
import { RealEstateCard } from "../../components/RealEstateCard";
import { sortByArea, sortByRent } from "@/app/utils/sort";
import { OrderType } from "@/app/(pages)/home/page";
import GoogleMapMini from "../GoogleMapMini/GoogleMapMini";

type PropsType = {
  orderType: OrderType;
};

export const MainContent: FC<PropsType> = (props) => {
  const { orderType } = props;
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

  // const [selectedCardNumber, setSelectedCardNumber] = useState<number>(0);
  const { tenants, tenantsLoading } = useTenants();

  useEffect(() => {
    switch (orderType) {
      case "rent":
        sortByRent(tenants);
        break;
      case "area":
        sortByArea(tenants);
        break;
      default:
        break;
    }
    setSelectedCardList([]);
  }, [tenants, orderType]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF",
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
                    prefecture_id: tenant.prefecture_id,
                    city_id: tenant.city_id,
                    subsidy_id: tenant.subsidy_id,
                    title: tenant.title,
                    images: tenant.images,
                    area: tenant.area,
                    description: tenant.description,
                    rent: tenant.rent,
                    address: tenant.address,
                    latitude: tenant.latitude,
                    longitude: tenant.longitude,
                    name_station: tenant.name_station,
                    address_station: tenant.address_station,
                    latitude_station: tenant.latitude_station,
                    longitude_station: tenant.longitude_station,
                  }}
                  isSelected={selectedCardList.includes(index)}
                  displayIndex={index + 1}
                  onSelect={() => {
                    handleCardClick(index);
                  }}
                />
              );
            })}
          </SideListArea>
        )}

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
            center={{
              lat: 33.867536,
              lng: 130.856376,
            }}
            tenantsList={tenants.map((tenant) => {
              return {
                title: tenant.title,
                defaultPosition: {
                  lat: tenant.latitude,
                  lng: tenant.longitude,
                },
                nearestStationPosition: {
                  lat: tenant.latitude_station,
                  lng: tenant.longitude_station,
                },
              };
            })}
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
