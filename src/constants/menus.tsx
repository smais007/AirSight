import { CreditCard, Document, Explore, Home } from "@/icons";
import { JSX } from "react";

export type MenuProps = {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
  section?: boolean;
  integration?: boolean;
};

export type GroupMenuProps = {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
};

export const LANDING_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Home",
    icon: <Home />,
    path: "/dashboard",
    section: true,
  },
  {
    id: 1,
    label: "Map",
    icon: <CreditCard />,
    path: "/map",
    section: true,
  },
  {
    id: 2,
    label: "Planer",
    icon: <Explore />,
    path: "/planer",
  },
  {
    id: 3,
    label: "Alerts",
    icon: <Document />,
    path: "#alerts",
  },
  {
    id: 4,
    label: "Info",
    icon: <Document />,
    path: "#info",
  },
];
