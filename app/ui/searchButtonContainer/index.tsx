import { City } from "@/app/api/getCity";
import { FC } from "react";

type SearchButtonContainerProps = {
  isPrefecture: boolean;
  title: string;
  cities: City[];
  setSelected: (selected: City | null) => void;
};

export const SearchButtonContainer: FC<SearchButtonContainerProps> = (
  props
) => {
  const { isPrefecture, title, cities, setSelected } = props;
  return (
    <div
      className="search-button-container"
      style={{
        width: "200px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        className="search-button-title"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "0 16px",
        }}
      >
        <p
          style={{
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center",
            color: "#f93e86",
          }}
        >
          {title}
        </p>
      </div>
      <div
        className="search-button-subtitles"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "0 16px",
        }}
      >
        {cities.map((city, index) => {
          return (
            <button
              key={index}
              className="header-button"
              style={{
                backgroundColor: "#FFF",
                padding: "8px 32px",
                borderRadius: "16px",
                border: "1px solid #0fc1da",
                width: "160px",
              }}
              onClick={() => {
                setSelected(city);
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {city.city_name}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
