import Image from "next/image";
import React from "react";
import { FC, ReactNode } from "react";
// import "./header.css";

type SideListAreaProps = {
  children: ReactNode;
};

export const SideListArea: FC<SideListAreaProps> = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // width: "726px",
        gap: "32px",
        padding: "120px 64px",
      }}
    >
      {children}
    </div>
  );
};
