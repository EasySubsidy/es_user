import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "#908CA3",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 120px",
      }}
    >
      <div>
        <p
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#FFF",
            textAlign: "center",
          }}
        >
          らくらく助成金
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#FFF",
              textAlign: "center",
            }}
          >
            北九州市HP
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#FFF",
              textAlign: "center",
            }}
          >
            ポリシー
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#FFF",
              textAlign: "center",
            }}
          >
            問い合わせ
          </p>
        </div>
      </div>
    </div>
  );
};
