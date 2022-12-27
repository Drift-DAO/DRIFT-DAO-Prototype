import React from "react";
import DAO_detail from "../rightSideComponents/lowerPart/DAO_detail";
import Exit_DAO from "../rightSideComponents/lowerPart/Exit_DAO";
import Right from "../rightSideComponents/upperPart/Right";
import Right11 from "../rightSideComponents/RightSideUpperComponent";

const RightSide = () => {
  return (
    <div
      className="bg-gradient-to-r from-purple-500 to-pink-900 mx-2 my-2"
      style={{ width: "20vw", borderRadius: "15px" }}
    >
      <div className="">
        <div style={{ height: "85vh" }} className=" py-2 overflow-hidden">
            <Right11 />
        </div>
      </div>
      <div className="grid justify-items-center">
        <div>
          <DAO_detail />
        </div>
        <div className="mt-4">
          <Exit_DAO />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
