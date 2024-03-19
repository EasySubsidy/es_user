import Image from "next/image";
// <<<<<<< HEAD
// import { EstateCardType, EstateDatum, detailDataType } from "../../data";
import { TopicLeading } from "./parts/topicLeadingIcon";
import { FC } from "react";

import "./styles.css";

import "./styles.css";
import React from "react";
import { Tenant } from "../../api/searchTenant";

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
      }}
    >
      <div
        // className="flex flex-col items-center justify-center w-[300px] h-[400px] bg-[#ECECEC]"
        className="CardContainer"
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
              minWidth: "200px",
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
                height: "auto",
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
            height: 200,
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
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "8px",
              padding: "16px",
            }}
          >
            内訳の内容を書きたい。
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
            {/* {estateData.description.map((text: string, index: number) => {
              return (
                <p
                  key={index}
                  style={{
                    fontSize: 14,
                    // fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  {text}
                </p>
              );
            })} */}
          </div>
        </div>
      )}
    </div>
  );
};
