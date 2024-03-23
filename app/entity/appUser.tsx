export type AppUser = {
  //   name: string;
  email: string;
  favorites: string[];
};

export enum Collection {
  USER = "user",
  CITY = "city",
  PREFECTURE = "prefecture",
  SUBSIDY = "subsidy",
  TENANT = "tenant",
  REALTOR = "realtor",
}
