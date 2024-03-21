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
        gap: "32px",
        padding: "64px",
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: "calc(100vh - 200px)",
        boxSizing: "border-box",
        width: "100%",
        minWidth: "700px",
      }}
    >
      {children}
    </div>
  );
};
