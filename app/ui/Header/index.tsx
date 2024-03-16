import Image from "next/image";
import "./header.css";
export const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between h-[120px] w-full bg-[#619191]">
      <div className="flex flex-row items-center gap-4 p-16">
        <Image
          src="/header_logo.svg"
          alt="logo"
          width={80}
          height={80}
          style={{ backgroundColor: "transparent" }}
        />
        <div className="title flex flex-row items-center">
          <p
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
            }}
          >
            らくらく助成金
          </p>
        </div>
      </div>
      <div
        className="flex flex-row items-center gap-8 mr-[32px]
      "
      >
        <button className="header-button">
          <div className="flex flex-col items-center gap-2">
            <Image src="/login.svg" alt="login" width={24} height={24} />
            <p
              style={{
                fontSize: 16,
                fontWeight: 700,
                // color: "#000000",
                textAlign: "center",
              }}
            >
              ログイン
            </p>
          </div>
        </button>

        <button className="header-button">
          <div className="flex flex-col items-center gap-2">
            <Image src="/menu.svg" alt="menu" width={24} height={24} />
            <p
              style={{
                fontSize: 16,
                fontWeight: 700,
                // color: "#000000",
                textAlign: "center",
              }}
            >
              メニュー
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
