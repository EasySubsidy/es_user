import { OrderType } from "@/app/pages/home/page";
// import { Grid, Modal } from "@mui/material";
import Image from "next/image";
import React, { FC, use, useState } from "react";
import Grid from "@mui/material/Grid";
import { Modal } from "@mui/material";
import { usePrefectures } from "@/app/context";
import { SearchButtonContainer } from "../searchButtonContainer";
import { useCities } from "@/app/context/cityContext";
import { City } from "@/app/api/getCity";

type TagBarProps = {
  orderType: string;
  setOrderType: (orderType: OrderType) => void;
  selectedPrefecture?: City | null;
  setSelectedCity: (city: City | null) => void;
};

export const TagBar: FC<TagBarProps> = (props) => {
  const { orderType, setOrderType, selectedPrefecture, setSelectedCity } =
    props;
  const [open, setOpen] = useState<boolean>(false);
  const toggleModalOpen = () => {
    setOpen(!open);
  };

  const { prefectures, prefecturesLoading } = usePrefectures();
  const { cities, citiesLoading } = useCities();

  // prefecturesのprefecture_nameを受け取ってcitiesのprefecture_idと比較して
  // prefecture_idが一致するものをcitiesの中から抽出する。
  const filterCities = (prefecture_name: string) => {
    // 与えられた引数と一致する都道府県名を持つ都道府県<Prefecture>をprefecturesから抽出する。
    const targetPrefecture = prefectures.find(
      (prefecture) => prefecture.prefecture_name === prefecture_name
    );
    const filteredCities = cities.filter(
      (city) => city.prefecture_id === targetPrefecture?.id
    );
    return filteredCities;
  };
  // citiesのうち

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
            onClick={() => {
              toggleModalOpen();
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
          <Modal
            open={open}
            onClose={toggleModalOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              padding: "0 16px",

              borderRadius: "16px",
            }}
          >
            <div
              style={{
                width: 800,
                height: 800,
                backgroundColor: "#FFF",
                color: "#000",
                padding: "64px 32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  height: "100%",
                  // border: "1px solid #000",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <div>都道府県/市町村で絞る</div>
                  <div
                    className="buttonArea"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      // padding: "0 16px",
                      width: "100%",
                      border: "1px solid #000",
                    }}
                  >
                    <Grid container spacing={6}>
                      {prefectures.map((prefecture, index) => (
                        <Grid item xs={4} key={index}>
                          <SearchButtonContainer
                            title={prefecture.prefecture_name}
                            cities={filterCities(prefecture.prefecture_name)}
                            isPrefecture={true}
                            setSelected={setSelectedCity}
                          />

                          {/* <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "#FFF",
                              borderRadius: "16px",
                              // border: "1px solid #000",
                            }}
                          >
                            <p>{prefecture.prefecture_name}</p>
                          </div> */}
                        </Grid>
                      ))}
                    </Grid>
                    {/* <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#FFF",
                            borderRadius: "16px",
                            border: "1px solid #000",
                          }}
                        >
                          <p>aaa</p>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#FFF",
                            borderRadius: "16px",
                            border: "1px solid #000",
                          }}
                        >
                          <p>aaa</p>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#FFF",
                            borderRadius: "16px",
                            border: "1px solid #000",
                          }}
                        >
                          <p>aaa</p>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#FFF",
                            borderRadius: "16px",
                            border: "1px solid #000",
                          }}
                        >
                          <p>aaa</p>
                        </div>
                      </Grid>
                    </Grid> */}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <div>値段で絞る</div>
                  <div
                    className="buttonArea"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "0 16px",
                      width: "100%",
                      border: "1px solid #000",
                    }}
                  >
                    aaa
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <div>時補助金表示</div>
                  <div
                    className="buttonArea"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "0 16px",
                      width: "100%",
                      border: "1px solid #000",
                    }}
                  >
                    aaa
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
