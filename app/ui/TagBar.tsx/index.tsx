export const TagBar = () => {
  return (
    <div className="flex flex-row items-center justify-between h-[64px] w-full bg-[#ECECEC]">
      <div className="flex flex-row items-center gap-4 p-16"></div>
      <div
        className="flex flex-row items-center gap-8 mr-[32px]
      "
      >
        <button className="header-button">
          <div className="flex flex-col items-center gap-2">
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
