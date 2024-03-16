import Image from "next/image";
import { EstateCardType, EstateDatum } from "../../data";
import { TopicLeading } from "./parts/topicLeading";
import { FC } from "react";

import "./styles.css";
const estateDataList: EstateCardType[] = EstateDatum;

type PropsType = {
  estateData: EstateCardType;
  isSelect?: boolean;
  index: number;
};

export const RealEstateCard: FC<PropsType> = (props) => {
  const { estateData, isSelect, index } = props;
  return (
    <div
      // className="flex flex-col items-center justify-center w-[300px] h-[400px] bg-[#ECECEC]"
      className="CardContainer"
      style={
        {
          // width: "100%",
          //   maxWidth: "600px",
          //   height: "320px",
          //   backgroundColor: "#FFF",
          //   display: "flex",
          //   flexDirection: "column",
          //   borderRadius: "16px",
          //   border: "1px solid #E0E0E0", // 枠線をより細く、明るい色に
          //   padding: "16px",
          //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // カードに影を追加
          //   transition: "transform 0.3s ease, box-shadow 0.3s ease", // ホバー時の動作をスムーズに
          //   cursor: "pointer", // ホバー時にカーソルをポインターに変更
          //   '&:hover': {
          //     transform: "translateY(-5px)", // ホバー時にカードを少し上に移動
          //     boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // ホバー時に影をより強く
          //   },
        }
      }
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
            height: "100%",
            // height: "100%",
            // minWidth: "160px",
            // minHeight: "auto",
            // backgroundColor: "#ECECEC",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={estateData.image_url[0]}
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
                {estateData.address}
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
                {estateData.price}
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
                {estateData.nearest_station}
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
      >
        {estateData.description.map((desc, index) => (
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
