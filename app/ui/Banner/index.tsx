"use client";

import { FC } from "react";
import Image from "next/image";
import { BannerCard } from "../BannerCard";

export const Banner: FC = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-[400px] bg-[#ECECEC]"
      style={{
        backgroundColor: "#9D9898",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        // maxWidth: "1200px",
        padding: "32px 64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          // height: "640px",
          maxWidth: "1200px",
          gap: "48px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "auto",
            // backgroundColor: "#ECECEC",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/banner_img.svg"
            alt="banner"
            width={900}
            height={400}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* <div
        style={{
          width: "694px",
          // height: "",
          backgroundColor: "#E4E4E4",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      > */}

        <BannerCard isLogin={false} />
        {/* </div> */}
      </div>
    </div>
  );
};
