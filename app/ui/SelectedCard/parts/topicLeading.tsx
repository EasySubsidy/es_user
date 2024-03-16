import { FC } from "react";

type PropsType = {
  title: string;
  fontSize?: string;
  fontColor?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
};

export const TopicLeading: FC<PropsType> = (props) => {
  const { title } = props;
  return (
    <div
      className=""
      style={{
        width: props.width ? props.width : "60px",
        height: props.height ? props.height : "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "24px",
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#FFF",
      }}
    >
      <p
        className="text-sm text-gray-400"
        style={{
          fontSize: props.fontSize ? props.fontSize : "12",
          // fontWeight: 700,
          color: props.fontColor ? props.fontColor : "#000",
          textAlign: "center",
        }}
      >
        {title}
      </p>
    </div>
  );
};
