import React from "react";
import AutoHead from "./AutoHead";
import AutoRow from "./AutoRow";
import { useLocation } from "react-router-dom";

function FortuneMain() {
  const location = useLocation();
  console.log(location.state,"locati")
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <AutoHead data={location.state}/>
        <AutoRow data={location.state} />
      </div>
    </div>
  );
}

export default FortuneMain;
