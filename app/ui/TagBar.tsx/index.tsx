import { OrderType } from "@/app/(pages)/home/page";
// import { Grid, Modal } from "@mui/material";
import Image from "next/image";
import React, { FC, use, useState } from "react";
import Grid from "@mui/material/Grid";
import { Modal } from "@mui/material";
import { usePrefectures } from "@/app/context";
import { SearchButtonContainer } from "../searchButtonContainer";
import { useCities } from "@/app/context/cityContext";
import { City } from "@/app/api/getCity";
import {
  UserInputForSubsidy,
  subsidyDataType,
} from "@/app/utils/subsidy_function";
import { Subsidy, getSubsidyByCityId } from "@/app/api/getSubsidy";

type TagBarProps = {
  orderType: string;
  setOrderType: (orderType: OrderType) => void;
  selectedPrefecture?: City | null;
  setSelectedCity: (city: City | null) => Promise<void>;
  userInput: UserInputForSubsidy;
  setUserInput: (userInput: UserInputForSubsidy) => void;
  subSidy: subsidyDataType;
  setSubsidy: (subsidy: subsidyDataType) => void;
  city: City | null;
  setKeyword: (keyword: string) => void;
};

export const TagBar: FC<TagBarProps> = (props) => {
  const {
    orderType,
    setOrderType,
    selectedPrefecture,
    city,
    setSelectedCity,
    userInput,
    setUserInput,
    subSidy,
    setSubsidy,
    setKeyword,
  } = props;
  const [open, setOpen] = useState<boolean>(false);
  const toggleModalOpen = () => {
    setOpen(!open);
  };

  const { prefectures } = usePrefectures();
  const { cities } = useCities();

  const [employee_new, setEmployee_new] = useState<number | null>(0);
  const [full_time, setFull_time] = useState<number | null>(0);
  const [part_time, setPart_time] = useState<number | null>(0);
  const [renovation, setRenovation] = useState<number | null>(0);
  const [office_size, setOffice_size] = useState<"null" | "small" | "large">(
    "null"
  );
  const [rent, setRent] = useState<"null" | "small" | "large">("null");
  const [input, setInput] = useState<string>("");

  // prefecturesのprefecture_nameを受け取ってcitiesのprefecture_idと比較して
  // prefecture_idが一致するものをcitiesの中から抽出する。
  const filterCities = (prefecture_name: string) => {
    const targetPrefecture = prefectures.find(
      (prefecture) => prefecture.prefecture_name === prefecture_name
    );
    const filteredCities = cities.filter(
      (city) => city.prefecture_id === targetPrefecture?.id
    );
    return filteredCities;
  };

  const fetchSubsidyData = async (city_id: string | null) => {
    if (city_id) {
      const subsidyData: Subsidy | null = await getSubsidyByCityId(city_id);
      if (subsidyData) {
        setSubsidy({
          subsidy_city_id: subsidyData.city_id,
          requirement: {
            employee_new: subsidyData.requirement_employee_new,
            area: subsidyData.subsidy_area,
          },
          subsidyDataType: {
            employment: {
              full_time: subsidyData.subsidy_employment_fulltime,
              part_time: subsidyData.subsidy_employment_parttime,
              title: subsidyData.subsidy_employment_title,
            },
            office: {
              large: {
                amount: subsidyData.subsidy_office_limit_large_amount,
                description: subsidyData.subsidy_office_limit_large_description,
              },
              small: {
                amount: subsidyData.subsidy_office_limit_small_amount,
                description: subsidyData.subsidy_office_limit_small_description,
              },
              rate: subsidyData.subsidy_office_rate,
              title: subsidyData.subsidy_office_title,
            },
            rent: {
              large: {
                amount: subsidyData.subsidy_rent_limit_large_amount,
                description: subsidyData.subsidy_rent_limit_large_description,
              },
              small: {
                amount: subsidyData.subsidy_rent_limit_small_amount,
                description: subsidyData.subsidy_rent_limit_small_description,
              },
              rate: subsidyData.subsidy_rent_rate,
              time: subsidyData.subsidy_rent_time,
              title: subsidyData.subsidy_rent_title,
            },
          },
        });
      }
    }
  };

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
          {/* <button
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
          </button> */}
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
            <div
              onClick={() => {
                setKeyword(input);
              }}
              className="cursor-pointer"
            >
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
        </div>
      </div>
      <Modal
        open={open}
        onClose={toggleModalOpen}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",

          borderRadius: "16px",
          overflow: "scroll",
          maxHeight: "100vh",
        }}
      >
        <div
          style={{
            width: 800,
            height: "auto",
            backgroundColor: "#FFF",
            color: "#000",
            padding: "64px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              height: "100%",
              padding: "64px 16px",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                都道府県/市町村で絞る
              </div>
              <div
                className="buttonArea"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "16px 16px",
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
                        fetchSubsidyData={fetchSubsidyData}
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
              </div>
            </div>

            {city && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  詳細情報入力
                </div>
                <div
                  className="inputArea"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    padding: "32px 32px",
                    width: "100%",
                    border: "1px solid #000",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      padding: "0 16px",
                      width: "100%",
                      // border: "1px solid #000",
                    }}
                  >
                    <div className="inputTitle">新規従業員数</div>
                    <input
                      type="number"
                      name="employee_new"
                      placeholder="新規従業員数"
                      value={
                        employee_new !== null ? employee_new.toString() : ""
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        setEmployee_new(value === "" ? null : Number(value));
                      }}
                      min={0}
                      max={1000000}
                      style={{
                        width: 400,
                        height: 48,
                        padding: "8px",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#000000",
                        textAlign: "start",
                        outline: "none",
                        border: "1px solid #000",
                        borderRadius: "16px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      padding: "0 16px",
                      width: "100%",
                      // border: "1px solid #000",
                    }}
                  >
                    <div className="inputTitle">フルタイム従業員数</div>
                    <input
                      type="number"
                      name="full_time"
                      placeholder="フルタイム従業員数"
                      value={full_time !== null ? full_time.toString() : ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFull_time(value === "" ? null : Number(value));
                      }}
                      min={0}
                      max={1000000}
                      style={{
                        width: 400,
                        height: 48,
                        padding: "8px",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#000000",
                        textAlign: "start",
                        outline: "none",
                        border: "1px solid #000",
                        borderRadius: "16px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      padding: "0 16px",
                      width: "100%",
                      // border: "1px solid #000",
                    }}
                  >
                    <div className="inputTitle">パートタイム従業員数</div>
                    <input
                      type="number"
                      name="part_time"
                      placeholder="パートタイム従業員数"
                      value={part_time !== null ? part_time.toString() : ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPart_time(value === "" ? null : Number(value));
                      }}
                      // onChange={(e) => {
                      //   const value = e.target.value;
                      //   setUserInput({
                      //     ...userInput,
                      //     part_time: value === "" ? null : Number(value),
                      //   });
                      //   // setPart_time(value === "" ? null : Number(value));
                      // }}
                      min={0}
                      max={1000000}
                      style={{
                        width: 400,
                        height: 48,
                        padding: "8px",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#000000",
                        textAlign: "start",
                        outline: "none",
                        border: "1px solid #000",
                        borderRadius: "16px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      padding: "0 16px",
                      width: "100%",
                      // border: "1px solid #000",
                    }}
                  >
                    <div className="inputTitle">改修費</div>
                    <input
                      type="number"
                      name="renovation"
                      placeholder="改装費"
                      value={renovation !== null ? renovation.toString() : ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        setRenovation(value === "" ? null : Number(value));
                      }}
                      min={0}
                      max={1000000}
                      style={{
                        width: 400,
                        height: 48,
                        padding: "8px",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#000000",
                        textAlign: "start",
                        outline: "none",
                        border: "1px solid #000",
                        borderRadius: "16px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      // justifyContent: "space-between",
                      gap: "8px",

                      width: "100%",
                      // border: "1px solid #000",
                    }}
                  >
                    {subSidy.subsidyDataType.office.title !== "" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "8px",
                          padding: "16px 16px",

                          width: "100%",
                          // border: "1px solid #000",
                        }}
                      >
                        <div className="inputTitle">
                          {subSidy.subsidyDataType.office.title}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            flexWrap: "wrap",
                            // justifyContent: "space-between",
                            gap: "8px",
                            // padding: "16px 16px",
                            width: "100%",
                            maxWidth: "400px",
                            // border: "1px solid #000",
                          }}
                        >
                          <label>
                            <input
                              type="radio"
                              name="officeSize"
                              value="null"
                              checked={office_size === "null"}
                              onChange={() => setOffice_size("null")}
                            />
                            指定なし
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="officeSize"
                              value="small"
                              checked={office_size === "small"}
                              onChange={() => setOffice_size("small")}
                            />
                            {subSidy.subsidyDataType.office.small.description}
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="officeSize"
                              value="large"
                              checked={office_size === "large"}
                              onChange={() => setOffice_size("large")}
                            />
                            {subSidy.subsidyDataType.office.large.description}
                          </label>
                        </div>
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        padding: "16px 16px",
                        width: "100%",
                        // border: "1px solid #000",
                      }}
                    >
                      <div className="inputTitle">
                        {subSidy.subsidyDataType.rent.title}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          flexWrap: "wrap",
                          // justifyContent: "space-between",
                          gap: "8px",
                          // padding: "16px 16px",
                          width: "100%",
                          maxWidth: "400px",
                          // border: "1px solid #000",
                        }}
                      >
                        <label
                          style={{
                            whiteSpace: "nowrap",
                          }}
                        >
                          <input
                            type="radio"
                            name="rent"
                            value="null"
                            checked={rent === "null"}
                            onChange={() => setRent("null")}
                          />
                          指定なし
                        </label>
                        <label
                          style={{
                            whiteSpace: "nowrap",
                          }}
                        >
                          <input
                            type="radio"
                            name="rent"
                            value="small"
                            checked={rent === "small"}
                            onChange={() => setRent("small")}
                          />
                          {subSidy.subsidyDataType.rent.small.description}
                        </label>
                        <label
                          style={{
                            whiteSpace: "nowrap",
                          }}
                        >
                          <input
                            type="radio"
                            name="rent"
                            value="large"
                            checked={rent === "large"}
                            onChange={() => setRent("large")}
                          />
                          {subSidy.subsidyDataType.rent.large.description}
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="header-button"
                    onClick={() => {
                      setUserInput({
                        employee_new: employee_new !== null ? employee_new : 0,
                        full_time: full_time !== null ? full_time : 0,
                        part_time: part_time !== null ? part_time : 0,
                        renovation: renovation !== null ? renovation : 0,
                        office_size: office_size,
                        rent: rent,
                      });
                    }}
                    style={{
                      width: 300,
                      height: 48,
                      padding: "8px",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#000000",
                      textAlign: "center",
                      outline: "none",
                      border: "1px solid #000",
                      borderRadius: "16px",
                    }}
                  >
                    更新
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};
