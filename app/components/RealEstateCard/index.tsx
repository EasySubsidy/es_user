import Image from "next/image";

import { TopicLeading } from "./parts/topicLeadingIcon";
import { FC, useEffect, useMemo, useState } from "react";
import "./styles.css";
import React from "react";
import { Tenant } from "@/app/api/searchTenant";
import SwiperArea from "../SwiperArea";
import { SwiperSlide } from "swiper/react";
import { UserData } from "@/app/api/getUserInfo";
import {
  SubsidyDetail,
  UserInputForSubsidy,
  checkSubsidyRequirement,
  subsidyDataType,
} from "@/app/utils/subsidy_function";
import { User } from "firebase/auth";

type PropsType = {
  estateData: Tenant;
  isSelected: boolean;
  displayIndex: number;
  onSelect: () => void;
  isFavorite: boolean;
  onChangeFavorite: (tenant: Tenant) => void;
  subSidy: subsidyDataType;
  userInput: UserInputForSubsidy;
  currentUser: User | null;
};

export const RealEstateCard: FC<PropsType> = (props) => {
  const {
    estateData,
    isSelected,
    displayIndex: index,
    onSelect,
    isFavorite,
    onChangeFavorite,
    subSidy,
    userInput,
    currentUser,
  } = props;

  const TenantForSubsidy = useMemo(() => {
    return {
      rent: estateData.rent,
      area: estateData.area,
      tenant_subsidy_city_id: estateData.city_id,
    };
  }, [estateData]);

  const UserInputForSubsidy = userInput;
  const subsidyDataType = subSidy;

  const [subsidyDetail, setSubsidyDetail] = useState<SubsidyDetail>({
    employee_subsidy: 0,
    office_subsidy: 0,
    rent_subsidy: 0,
  });

  useEffect(() => {
    console.log("TenantForSubsidy", TenantForSubsidy);
    console.log("UserInputForSubsidy", UserInputForSubsidy);
    console.log("subsidyDataType", subsidyDataType);
    const subsidyData = checkSubsidyRequirement(
      TenantForSubsidy,
      UserInputForSubsidy,
      subsidyDataType
    );
    setSubsidyDetail(subsidyData);
    console.log("subsidyData", subsidyData);
  }, [TenantForSubsidy, UserInputForSubsidy, subsidyDataType]);

  return (
    <div
      className={`CardWrapper ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect()}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        padding: 0,
        margin: 0,
        width: "100%",
        minWidth: "650px",
      }}
    >
      <div
        // className="flex flex-col items-center justify-center w-[300px] h-[400px] bg-[#ECECEC]"
        className="CardContainer"
        style={{
          width: "100%",
        }}
      >
        <div
          className="topArea"
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <div
            className="imageContainer"
            style={{
              width: "100%",
              maxWidth: "300px",
              // minWidth: "200px",
              height: "100%",
              // height: "100%",
              // minWidth: "160px",
              // minHeight: "auto",
              // backgroundColor: "#ECECEC",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // justifyContent: "center",
              padding: "16px",
            }}
          >
            <Image
              src={estateData.images[0]}
              alt="image"
              width={140}
              height={80}
              style={{
                backgroundColor: "transparent",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="textContainer"
            style={{
              width: "100%",

              height: 200,
              minWidth: 300,
              // backgroundColor: "#ECECEC",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              // justifyContent: "center",
              gap: "12px",
              // paddingTop: "16px",
            }}
          >
            <div
              className="titleArea"
              style={{
                width: "100%",
                // height: 100,
                // backgroundColor: "#ECECEC",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 24,
                  // backgroundColor: isSelect ? "#FFB6C1" : "#FFF",
                  backgroundColor: "#93C5FF",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  border: "1px solid #93C5FF",
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  {index}
                </p>
              </div>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#000",
                  textAlign: "center",
                }}
              >
                {estateData.title}
              </p>
              {currentUser && (
                <button
                  onClick={() => {
                    onChangeFavorite(estateData);

                    // fetchTenants();
                    console.log("clicked");
                    console.log("estateData", estateData);
                  }}
                  style={{
                    width: 24,
                    height: 24,
                    // backgroundColor: "transparent",
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: "center",
                    // justifyContent: "center",
                    // border: "none",
                  }}
                >
                  <Image
                    // src="/star_outline.svg"
                    src={isFavorite ? "/star_black.svg" : "/star_outline.svg"}
                    alt="favorite"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </div>
            <div
              className="topicArea"
              style={{
                width: "100%",
                // height: 100,
                // backgroundColor: "#ECECEC",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <TopicLeading title="家賃" fontSize="16px" />
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#000",

                    width: "100%",
                    maxWidth: "160px",
                    textAlign: "start",
                  }}
                >
                  {/* {estateData.rent}円 */}
                  {estateData.rent.toLocaleString("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  })}
                  円（月額）
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <TopicLeading title="補助金総額" fontSize="16px" />
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#000",

                    width: "100%",
                    maxWidth: "160px",
                    textAlign: "start",
                  }}
                >
                  {(
                    subsidyDetail.employee_subsidy +
                    subsidyDetail.office_subsidy +
                    subsidyDetail.rent_subsidy
                  ).toLocaleString("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  })}
                  円（全期間）
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <TopicLeading title="住所" fontSize="16px" />
                <p
                  style={{
                    fontSize: 14,
                    // fontWeight: 700,
                    color: "#000",
                    width: "100%",
                    maxWidth: "160px",
                    textAlign: "start",
                  }}
                >
                  {estateData.address}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <TopicLeading title="最寄駅" fontSize="16px" />
                <p
                  style={{
                    fontSize: 14,
                    // fontWeight: 700,
                    color: "#000",

                    width: "100%",
                    maxWidth: "160px",
                    textAlign: "start",
                  }}
                >
                  {estateData.name_station}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bottomArea"
          style={{
            width: "100%",
            height: "auto",
            // backgroundColor: "#ECECEC",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // gap: "8px",
            // justifyContent: "center",
          }}
        ></div>
      </div>
      {isSelected && (
        <div
          className="modalSpace"
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // borderRadius: "16px",
            // border: "1px solid #E0E0E0",
            padding: "16px",
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            // marginTop: "16px",
            color: "#000",
          }}
        >
          <div
            className="detail-subsidy"
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "16px",
            }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SwiperArea>
                {estateData.images.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {/* <div style={{ width: "100px", height: "100px" }}> */}
                      <Image
                        src={img}
                        alt="estateImage"
                        width={200}
                        height={200}
                        // layout="fill"
                        // objectFit="cover"
                        style={{
                          width: "200px",
                          height: "200px",
                        }}
                      />
                      {/* </div> */}
                    </SwiperSlide>
                  );
                })}
              </SwiperArea>
            </div>
            {/* </div> */}
            {/* 内訳の内容を書きたい。 */}
          </div>
          <div
            className="descriptions"
            style={{
              width: "100%",
              height: "auto",
              // backgroundColor: "#ECECEC",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "8px",
              padding: "16px",
            }}
          >
            {Array.isArray(estateData.description) &&
              estateData.description.map((text: string, index: number) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "16px 16px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      {subsidyDetail.employee_subsidy +
        subsidyDetail.office_subsidy +
        subsidyDetail.rent_subsidy ===
      0 ? (
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "16px",
            color: "#FF7E7E",
          }}
        >
          ご利用になれる補助金がないか「お好み条件」から条件を入力してください。
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "16px",
            color: "#000",
          }}
        >
          <p>
            {subSidy.subsidyDataType.employment.title}{" "}
            {subsidyDetail.employee_subsidy}
          </p>
          <p>
            {subSidy.subsidyDataType.office.title}{" "}
            {subsidyDetail.office_subsidy}
          </p>
          <p>
            {subSidy.subsidyDataType.rent.title} {subsidyDetail.rent_subsidy}
          </p>
        </div>
      )}
    </div>
  );
};
