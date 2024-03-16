// "use client";
import "./styles.css";

import { FC, useState } from "react";

type BannerCardProps = {
  isLogin: boolean;
};

export const BannerCard: FC<BannerCardProps> = (props) => {
  const { isLogin } = props;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleNameChange = (event: { target: { value: string } }) => {
    const value = event.target.value; // 'as string' is unnecessary here as we're directly using the value
    setName(value);
  };

  const handleEmailChange = (event: { target: { value: string } }) => {
    const value = event.target.value; // Same here, direct use of the value from the event
    setEmail(value);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "694px",
        // height: "100%",
        backgroundColor: "#E4E4E4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "48px",
      }}
    >
      {isLogin ? (
        <div>
          <div className="titleArea">
            <p
              style={{
                fontSize: "32px",
                fontWeight: 700,
                // lineHeight: "48px",
                // color: "#333333",
              }}
            >
              ユーザー情報
            </p>
          </div>
          <div
            className="fieldArea"
            style={{
              width: "100%",
              // height: 100,
              // backgroundColor: "#ECECEC",
              gap: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="buttonArea"></div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            width: "100%",
            // height: "auto",
            // maxWidth: "1200px",
            // padding: "32px 64px",
            gap: "32px",
            padding: "40px 56px",
          }}
        >
          <div className="titleArea">
            <p
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#000",

                // lineHeight: "48px",
                // color: "#333333",
              }}
            >
              新規会員登録
            </p>
          </div>
          <div
            className="fieldArea"
            style={{
              width: "100%",
              // height: 100,
              // backgroundColor: "#ECECEC",
              gap: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{ color: "#000" }}
              placeholder="名前を入力してください"
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{ color: "#000" }}
              placeholder="メールアドレスを入力してください"
            />
          </div>
          <div
            className="buttonArea"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button>会員登録（無料）</button>
          </div>
        </div>
      )}
    </div>
  );
};
