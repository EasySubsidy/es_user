import Image from "next/image";
import { EstateCardType, EstateDatum, detailDataType } from "../../data";
import { TopicLeading } from "./parts/topicLeading";
import { FC } from "react";

import "./styles.css";
import SwiperArea from "@/app/components/SwiperArea";
import { SwiperSlide } from "swiper/react";
import GoogleMapMini from "../GoogleMapMini/GoogleMapMini";
const estateDataList: EstateCardType[] = EstateDatum;

type PropsType = {
  detailEstateData: detailDataType;
  isSelect?: boolean;
  index: number;
};

export const SelectedCard: FC<PropsType> = (props) => {
  const { detailEstateData, isSelect, index } = props;
  return (
    <div
      className="SelectedCard"
      style={{
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <div
        className="titleArea"
        style={{
          width: "100%",
          height: 64,
          backgroundColor: "#FFF",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          padding: "32px 32px",
        }}
      >
        <div
          style={{
            width: 24,
            height: 20,
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
              fontSize: 12,
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
            fontSize: 16,
            fontWeight: 700,
            color: "#000",
            textAlign: "center",
          }}
        >
          ミダス渋谷ラウンジ
          {/* {estateData.title} */}
        </p>
      </div>
      <div className="SwiperArea">
        {/* <SwiperArea /> */}
        <SwiperArea>
          <SwiperSlide>
            <GoogleMapMini
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
            />
          </SwiperSlide>
          {estateDataList.map((estateData, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={estateData.image_url[0]}
                  alt="estateImage"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
            );
          })}
        </SwiperArea>
      </div>
      <div
        className="textArea"
        style={{
          width: "100%",
          maxWidth: 240,
          height: 200,
          minWidth: 200,
          // backgroundColor: "#ECECEC",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
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
          }}
        ></div>
        <div
          className="topicArea"
          style={{
            width: "100%",
            // height: 100,
            // backgroundColor: "#ECECEC",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TopicLeading title="住所" />
            <p
              style={{
                fontSize: 12,
                // fontWeight: 700,
                color: "#000",
                textAlign: "center",
              }}
            >
              {detailEstateData.address}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TopicLeading title="コスト" />
            <p
              style={{
                fontSize: 12,
                // fontWeight: 700,
                color: "#000",
                textAlign: "center",
              }}
            >
              {detailEstateData.price}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TopicLeading title="最寄駅" />
            <p
              style={{
                fontSize: 12,
                // fontWeight: 700,
                color: "#000",
                textAlign: "center",
              }}
            >
              {detailEstateData.nearestStationInfo.title}
            </p>
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
      >
        {detailEstateData.description.map((desc, index) => (
          <p
            key={index}
            style={{
              fontSize: "12px",
              color: "#000",
              textAlign: "center",
            }}
          >
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};
