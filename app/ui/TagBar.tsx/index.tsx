import { OrderType } from "@/app/(pages)/home/page";
import Image from "next/image";
import React, { FC } from "react";

type TagBarProps = {
  orderType: string;
  setOrderType: (orderType: OrderType) => void;
};

export const TagBar: FC<TagBarProps> = (props) => {
  const { orderType, setOrderType } = props;
  return (
    <div className="flex flex-row items-center justify-between h-[64px] w-full bg-[#ECECEC]">
      {/* <div className="flex flex-row items-center gap-4 p-16"></div> */}
      <div
        className="flex flex-row items-center gap-8 mr-[32px]
      "
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 32px",
        }}
      >
        <div
          className="tagbar-item-l"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
            gap: "16px",
            padding: "0 16px",
          }}
        >
          <button
            className="header-button"
            style={{
              backgroundColor: "#BBBBBB",
              padding: "8px 32px",
              borderRadius: "16px",
              border: "1px solid #000",
            }}
            onClick={() => {
              setOrderType("rent");
              console.log(orderType);
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  // color: "#000000",
                  textAlign: "center",
                }}
              >
                値段
              </p>
            </div>
          </button>
          <button
            className="header-button"
            style={{
              backgroundColor: "#BBBBBB",
              padding: "8px 32px",
              borderRadius: "16px",
              border: "1px solid #000",
            }}
            onClick={() => {
              setOrderType("area");
              console.log(orderType);
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  // color: "#000000",
                  textAlign: "center",
                }}
              >
                面積
              </p>
            </div>
          </button>
          <button
            className="header-button"
            style={{
              backgroundColor: "#BBBBBB",
              padding: "8px 32px",
              borderRadius: "16px",
              border: "1px solid #000",
            }}
            onClick={() => {}}
          >
            <div className="flex flex-col items-center gap-2">
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  // color: "#000000",
                  textAlign: "center",
                }}
              >
                駅近
              </p>
            </div>
          </button>
        </div>
        <div
          className="tagbar-item-t"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
            gap: "16px",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "0 16px",
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <input
              type="text"
              placeholder="検索"
              style={{
                width: 440,
                height: 48,
                padding: "8px",
                fontSize: 16,
                fontWeight: 700,
                color: "#000000",
                textAlign: "start",
                outline: "none",
              }}
            />
            <div onClick={() => {}} className="cursor-pointer">
              <Image
                src="/searchIcon.svg"
                alt="search"
                width={24}
                height={24}
              />
            </div>
          </div>
          <button
            className="header-button"
            style={{
              backgroundColor: "#FFF",
              padding: "8px 32px",
              borderRadius: "16px",
              border: "1px solid #000",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  // color: "#000000",
                  textAlign: "center",
                }}
              >
                お好み条件
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
