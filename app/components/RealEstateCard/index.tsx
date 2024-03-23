import Image from "next/image";

import { TopicLeading } from "./parts/topicLeadingIcon";
import { FC } from "react";

import "./styles.css";
import React from "react";
import { Tenant } from "@/app/api/SearchTenant";
import SwiperArea from "../SwiperArea";
import { SwiperSlide } from "swiper/react";

type PropsType = {
  estateData: Tenant;
  isSelected: boolean;
  displayIndex: number;
  onSelect: () => void;
};

export const RealEstateCard: FC<PropsType> = (props) => {
  const { estateData, isSelected, displayIndex: index, onSelect } = props;

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
            height: 200,
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
              paddingTop: "16px",
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
                }}
              >
                <TopicLeading title="家賃" fontSize="16px" />
                <p
                  style={{
                    fontSize: 16,
                    // fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  {estateData.rent}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <TopicLeading title="補助金総額" fontSize="16px" />
                <p
                  style={{
                    fontSize: 16,
                    // fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  {estateData.rent}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <TopicLeading title="住所" fontSize="16px" />
                <p
                  style={{
                    fontSize: 14,
                    // fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
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
                }}
              >
                <TopicLeading title="最寄駅" fontSize="16px" />
                <p
                  style={{
                    fontSize: 14,
                    // fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
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
                  <p
                    key={index}
                    style={{
                      fontSize: 14,
                      color: "#000",
                      textAlign: "center",
                    }}
                  >
                    {text}
                  </p>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
