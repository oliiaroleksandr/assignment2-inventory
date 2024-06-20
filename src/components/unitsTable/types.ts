export type UnitStatus =
  | "Available"
  | "Reserved"
  | "Offer"
  | "Accepted"
  | "Sold"
  | "Sold firm";

export type Unit = {
  id: number;
  title: string;
  subTitle: string;
  grow: number;
  status: UnitStatus;
};
