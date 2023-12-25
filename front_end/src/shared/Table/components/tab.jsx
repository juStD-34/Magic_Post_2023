import React from "react";
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

export function Tabss({ TABS, setIsTrade, setPage }) {
  return (
    <Tabs value="123" className="w-full md:w-max bg-gray-200 rounded-lg">
      <TabsHeader>
        <Tab
          value="123"
          className="sm:whitespace-nowrap z-20"
          onClick={() => {
            setIsTrade(true);
            setPage(0);
          }}
        >
          &nbsp;&nbsp;{TABS[0].label}&nbsp;&nbsp;
        </Tab>
        <Tab
          value="456"
          className="sm:whitespace-nowrap z-20"
          onClick={() => {
            setIsTrade(false);
            setPage(0);
          }}
        >
          &nbsp;&nbsp;{TABS[1].label}&nbsp;&nbsp;
        </Tab>
      </TabsHeader>
    </Tabs>
  );
}
