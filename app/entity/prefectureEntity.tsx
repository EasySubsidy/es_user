export enum prefectureEntity {
  OITA = "大分",
  SAGA = "佐賀",
  KUMAMOTO = "熊本",
  HUKUOKA = "福岡",
  NAGASAKI = "長崎",
  MIYAZAKI = "宮崎",
  KAGOSHIMA = "鹿児島",
  TOKYO = "東京",
}

export type Prefecture = {
  prefecture_name: prefectureEntity;
};
