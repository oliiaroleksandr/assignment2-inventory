import { UnitStatus } from "./types";

type Unit = {
  id: number;
  title: string;
  subTitle: string;
  grow: number;
  status: UnitStatus;
};

const title = "#1201 - 4Br / 2Ba";
const subTitle = "(CA$ 105,000,000)";

export const unitsTable: Record<number, Unit[]> = {
  12: [{ id: 1, title, subTitle, grow: 1, status: "Sold" }],
  11: [{ id: 2, title, subTitle, grow: 1, status: "Available" }],
  10: [
    { id: 3, title, subTitle, grow: 1, status: "Sold" },
    { id: 4, title, subTitle, grow: 1, status: "Offer" },
  ],
  9: [
    { id: 5, title, subTitle, grow: 1, status: "Reserved" },
    { id: 6, title, subTitle, grow: 1, status: "Offer" },
  ],
  8: [
    { id: 7, title, subTitle, grow: 3, status: "Reserved" },
    { id: 8, title, subTitle, grow: 1, status: "Sold" },
  ],
  7: [
    { id: 9, title, subTitle, grow: 1, status: "Sold firm" },
    { id: 10, title, subTitle, grow: 1, status: "Sold" },
    { id: 11, title, subTitle, grow: 2, status: "Available" },
  ],
  6: [
    { id: 12, title, subTitle, grow: 1, status: "Offer" },
    { id: 13, title, subTitle, grow: 1, status: "Sold" },
    { id: 14, title, subTitle, grow: 1, status: "Sold" },
    { id: 15, title, subTitle, grow: 1, status: "Reserved" },
  ],
  5: [
    { id: 16, title, subTitle, grow: 1, status: "Sold" },
    { id: 17, title, subTitle, grow: 1, status: "Sold" },
    { id: 18, title, subTitle, grow: 1, status: "Sold" },
    { id: 19, title, subTitle, grow: 1, status: "Sold" },
    { id: 20, title, subTitle, grow: 1, status: "Sold" },
  ],
  4: [
    { id: 21, title, subTitle, grow: 1, status: "Sold firm" },
    { id: 22, title, subTitle, grow: 1, status: "Available" },
    { id: 23, title, subTitle, grow: 1, status: "Available" },
    { id: 24, title, subTitle, grow: 1, status: "Reserved" },
    { id: 25, title, subTitle, grow: 1, status: "Offer" },
  ],
  3: [
    { id: 26, title, subTitle, grow: 1, status: "Accepted" },
    { id: 27, title, subTitle, grow: 1, status: "Sold" },
    { id: 28, title, subTitle, grow: 1, status: "Sold firm" },
    { id: 29, title, subTitle, grow: 1, status: "Sold" },
    { id: 30, title, subTitle, grow: 1, status: "Offer" },
    { id: 31, title, subTitle, grow: 1, status: "Reserved" },
  ],
  2: [
    { id: 26, title, subTitle, grow: 1, status: "Sold firm" },
    { id: 27, title, subTitle, grow: 1, status: "Sold" },
    { id: 28, title, subTitle, grow: 1, status: "Available" },
    { id: 29, title, subTitle, grow: 1, status: "Sold firm" },
    { id: 30, title, subTitle, grow: 1, status: "Sold" },
    { id: 31, title, subTitle, grow: 1, status: "Accepted" },
  ],
};
