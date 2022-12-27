import React from "react";
import SimpleBar from "simplebar-react";


const Right11 = () => {
  return (
    <div className=" divide-y  divide-dashed mx-6 my-5">
      <SimpleBar style={{ maxHeight: "83vh" }}>
        <div className="font-bold text-xl">Announcement</div>
        <div className="pt-6">
          <div className="font-bold text-xl">Chat room</div>
          <div className="">
            <div>General</div>
            <div>Technical</div>
            <div>Important</div>
            <div>Doubt</div>
          </div>
        </div>
        <div className="pt-6">
          <div className="font-bold text-xl">Forum</div>
          <div>General Discussion</div>
          <div>Improvement Proposal</div>
          <div>Grant Program</div>
          <div>Important Discussion</div>
        </div>
        <div className="pt-6">
          <div className="font-bold text-xl">Proposal</div>
          <div>RPF</div>
          <div>On-Chain Voting</div>
        </div>
        <div className="pt-6">
          <div className="font-bold text-xl">Analytics</div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Right11;
