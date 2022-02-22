import React from "react";
import MemeSidebar from "./MemeSidebar";
import MemeTemplates from "./MemeTemplates";

const Main = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row g-0">
            <MemeSidebar />
            <MemeTemplates />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
