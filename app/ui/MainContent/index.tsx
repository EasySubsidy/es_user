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
import { City } from "@/app/api/getCity";
import { Tenant } from "@/app/api/searchTenant";
import { updateUserFavorites } from "@/app/api/updateUser";
import { useAuth } from "@/app/context";
import {
  UserInputForSubsidy,
  subsidyDataType,
} from "@/app/utils/subsidy_function";

type PropsType = {
  orderType: OrderType;
  selectedCity: City | null;
  subSidy: subsidyDataType;
  userInput: UserInputForSubsidy;
  keyword: string;
  setKeyword: (keyword: string) => void;
};

export const MainContent: FC<PropsType> = (props) => {
  const { orderType, selectedCity, subSidy, userInput, keyword, setKeyword } =
    props;
  const { currentUser, getFavorites, favorites } = useAuth();
  const { tenants, tenantsLoading, fetchTenants } = useTenants();

  const [selectedCardList, setSelectedCardList] = useState<number[]>([]);

  const [favoriteTenants, setFavoriteTenants] = useState<string[]>([]);

  useEffect(() => {
    if (currentUser) {
      getFavorites(currentUser.uid);
    }
  }, [currentUser, getFavorites]);

  // const [keyword, setKeyword] = useState<string>("");

  // const []

  // ここで助成金の内容を確認したい。

  // user情報にfavoritesは存在する。
  // 更新時にはuser情報が更新される。
  // ボタンを押した段階で更新が行われほしい。
  // userdataが更新されたらfavoriteの情報を取得したい。

  // if (currentUser) {
  // useEffect(() => {
  // getUserFavorites(currentUser.uid).then((favorites) => {
  //   setFavoriteTenants(favorites);
  // });
  // }, [currentUser]);
  // }

  const handleCardClick = (index: number) => {
    // 選択中の場合は選択解除
    if (selectedCardList.includes(index)) {
      setSelectedCardList(selectedCardList.filter((i) => i !== index));
      // console.log("remove");
    } else {
      setSelectedCardList([...selectedCardList, index]);
      // console.log("add");
    }
  };

  const updateFavoritesList = async (tenant: Tenant) => {
    let tenantsToUpdate = [...favoriteTenants];

    if (favoriteTenants.includes(tenant.id)) {
      tenantsToUpdate = tenantsToUpdate.filter((t) => t !== tenant.id);
    } else {
      tenantsToUpdate.push(tenant.id);
    }

    setFavoriteTenants(tenantsToUpdate);
    return tenantsToUpdate;
  };

  const handleFavorite = async (tenant: Tenant) => {
    if (!currentUser) {
      return;
    }

    const updatedFavorites = await updateFavoritesList(tenant);
    await updateUserFavorites(currentUser.uid, updatedFavorites);
    await getFavorites(currentUser.uid);
  };

  // 表示する物件を絞り込む。市町村で絞り込む。
  const filteredTenantsByCity = tenants.filter((tenant) => {
    if (selectedCity === null) {
      return true;
    }
    return tenant.city_id === selectedCity.id;
  });

  const filterTenantByName = tenants.filter((tenant) => {
    if (keyword === "") {
      return true;
    }

    return tenant.title.includes(keyword);
  });

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
        ) : filterTenantByName.length === 0 ? (
          <p>No tenants</p>
        ) : (
          <SideListArea>
            {filterTenantByName.map((tenant, index) => {
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
                  isFavorite={
                    currentUser && favorites
                      ? favorites.includes(tenant.id)
                      : false
                  }
                  onChangeFavorite={() => {
                    handleFavorite(tenant);
                  }}
                  subSidy={subSidy}
                  userInput={userInput}
                  currentUser={currentUser}
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
              lat: 33.460429,
              lng: 130.581485,
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
