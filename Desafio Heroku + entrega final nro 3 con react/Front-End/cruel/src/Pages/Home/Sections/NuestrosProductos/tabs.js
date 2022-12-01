import React from "react";
import { ReactComponent as Tragos } from "./img/tragos.svg";
import { ReactComponent as Platos } from "./img/platos.svg";

import TabContent from "./TabContent";
import TabContentPlatos from "./TabContentPlatos";

// Configure our tabs and tab content here
const tabs = [
  {
    title: "Tragos",
    id: "Tragos",
    icon: <Tragos />,
    color: "#232427",
    content: TabContent
  },
  {
    title: "Platos",
    id: "Platos",
    icon: <Platos />,
    color: "#232427",
    content: TabContentPlatos
  },
 
];

export default tabs;
