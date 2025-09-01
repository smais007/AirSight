import React from "react";
import About from "./_components/about-system";
import Model from "./_components/model/model";
import DataSource from "./_components/data-source/data-source";

const SystemInfoTab = () => {
  return (
    <div>
      <About />
      <Model />
      <DataSource />
    </div>
  );
};

export default SystemInfoTab;
