export type EstateCardType = {
  id: string;
  title: string;
  address: string;
  price: string;
  subsidy_amount: string;
  //最寄えき
  nearest_station: string;
  image_url: string[];
  description: string;
};

// <<<<<<< HEAD
// export const EstateDatum: EstateCardType[] = [
//   {
//     id: "1",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "100,000",
//     subsidy_amount: "100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],
//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
//   {
//     id: "2",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "100,000",
//     subsidy_amount: "100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],

//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
//   {
//     id: "3",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "100,000",
//     subsidy_amount: "100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],

//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
//   {
//     id: "4",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "¥100,000",
//     subsidy_amount: "100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],

//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
//   {
//     id: "5",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "¥100,000",
//     subsidy_amount: "100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],

// export const EstateDatum: EstateCardType[] = [
//   {
//     id: "1",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "¥100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],
//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
//   {
//     id: "2",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "¥100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],

//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
//   {
//     id: "3",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "¥100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],

//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
//   {
//     id: "4",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "¥100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],

//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
//   {
//     id: "5",
//     title: "ミダス渋谷ラウンジ",
//     address: "東京都新宿区西新宿1-1-1",
//     price: "¥100,000",
//     nearest_station: "新宿駅",
//     image_url: ["/model_img.png"],

//     description: [
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//       "新宿駅徒歩5分",
//     ],
//   },
// ];

export type detailDataType = {
  id: string;
  title: string;
  address: string;
  price: string;
  subsidy_amount: string;
  image_url: string[];
  description: string[];
  zoom: number;
  defaultInfo: {
    title: string;
    address: string;

    defaultPosition: {
      lat: number;
      lng: number;
    };
  };
  nearestStationInfo: {
    title: string;
    address: string;
    nearestStationPosition: {
      lat: number;
      lng: number;
    };
  };
};

export const detailData: detailDataType = {
  id: "1",
  title: "ミダス渋谷ラウンジ",
  address: "東京都新宿区西新宿1-1-1",
  price: "100,000",
  subsidy_amount: "100,000",
  image_url: ["/model_img.png"],
  description: [
    "新宿駅徒歩5分",
    "新宿駅徒歩5分",
    "新宿駅徒歩5分",
    "新宿駅徒歩5分",
  ],
  zoom: 15,
  defaultInfo: {
    title: "GoogleMapMini",
    address: "東京都新宿区西新宿",
    defaultPosition: {
      lat: 35.6600893,
      lng: 139.6952692,
    },
  },
  nearestStationInfo: {
    title: "GoogleMapMini",
    address: "東京都新宿区西新宿",
    nearestStationPosition: {
      lat: 35.6600893,
      lng: 139.6952692,
    },
  },
};

export const detailDataList: detailDataType[] = [
  {
    id: "1",
    title: "ミダス渋谷ラウンジ",
    address: "東京都新宿区西新宿1-1-1",
    price: "¥100,000",
    subsidy_amount: "100,000",
    image_url: ["/model_img.png"],
    description: [
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
    ],
    zoom: 15,
    defaultInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      defaultPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
    nearestStationInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      nearestStationPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
  },
  {
    id: "2",
    title: "ミダス渋谷ラウンジ",
    address: "東京都新宿区西新宿1-1-1",
    price: "¥100,000",
    subsidy_amount: "100,000",
    image_url: ["/model_img.png"],
    description: [
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
    ],
    zoom: 15,
    defaultInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      defaultPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
    nearestStationInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      nearestStationPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
  },
  {
    id: "3",
    title: "ミダス渋谷ラウンジ",
    address: "東京都新宿区西新宿1-1-1",
    price: "¥100,000",
    subsidy_amount: "100,000",
    image_url: ["/model_img.png"],
    description: [
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
    ],
    zoom: 15,
    defaultInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      defaultPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
    nearestStationInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      nearestStationPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
  },
  {
    id: "4",
    title: "ミダス渋谷ラウンジ",
    address: "東京都新宿区西新宿1-1-1",
    price: "¥100,000",
    subsidy_amount: "100,000",
    image_url: ["/model_img.png"],
    description: [
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
    ],
    zoom: 15,
    defaultInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      defaultPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
    nearestStationInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      nearestStationPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
  },
  {
    id: "5",
    title: "ミダス渋谷ラウンジ",
    address: "東京都新宿区西新宿1-1-1",
    price: "¥100,000",
    subsidy_amount: "100,000",
    image_url: ["/model_img.png"],
    description: [
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
    ],
    zoom: 15,
    defaultInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      defaultPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
    nearestStationInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      nearestStationPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
  },

  {
    id: "6",
    title: "ミダス渋谷ラウンジ",
    address: "東京都新宿区西新宿1-1-1",
    price: "¥100,000",
    subsidy_amount: "100,000",
    image_url: ["/model_img.png"],
    description: [
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
    ],
    zoom: 15,
    defaultInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      defaultPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
    nearestStationInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      nearestStationPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
  },
  {
    id: "7",
    title: "ミダス渋谷ラウンジ",
    address: "東京都新宿区西新宿1-1-1",
    price: "¥100,000",
    subsidy_amount: "100,000",
    image_url: ["/model_img.png"],
    description: [
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
      "新宿駅徒歩5分",
    ],
    zoom: 15,
    defaultInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      defaultPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
    nearestStationInfo: {
      title: "GoogleMapMini",
      address: "東京都新宿区西新宿",
      nearestStationPosition: {
        lat: 35.6600893,
        lng: 139.6952692,
      },
    },
  },
];
