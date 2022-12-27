import React from 'react'
import { useSelector } from 'react-redux'
import ChatCardLeft from "../middleComponents.jsx/chatRoom/upperPart/ChatCardLeft";
import ChatCardRight from '../middleComponents.jsx/chatRoom/upperPart/ChatCardRight';
import Input_and_Button from '../middleComponents.jsx/chatRoom/lowerPart/Input_and_Button';

const MiddleComponent = () => {
  const {leftSide, rightSide} = useSelector((state)=>state.leftRight)
  return (
    <div
      className="bg-pink-900 mx-2 my-2 rounded-2xl"
      style={{ width: "71vw" }}
    >
      <div className="text-center my-4">
        <div>leftside: {leftSide} </div>
        <div>rightside: {rightSide} </div>
      </div>
      <div className="mx-10">
        <div className="flex justify-start">
          <ChatCardLeft />
        </div>
        <div className="mt-20 flex justify-end">
          <ChatCardRight />
        </div>
      </div>
      <div>
        <Input_and_Button/>
      </div>
    </div>
  );
}

export default MiddleComponent