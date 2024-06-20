import { UnitStatus } from "./types";

const map = {
  dark: {
    Available: "#3A5232",
    Reserved: "#28304A",
    Offer: "#2C5252",
    Accepted: "#4A263A",
    Sold: "#4A2A28",
    "Sold firm": "#712830",
  },
  light: {
    Available: "#E2EED6",
    Reserved: "#CED5FA",
    Offer: "#D6EEEE",
    Accepted: "#FACEF0",
    Sold: "#FACED3",
    "Sold firm": "#FB8895",
  },
};

export const getStatusColor = (status: UnitStatus, theme: "dark" | "light") => {
  return map[theme][status];
};
