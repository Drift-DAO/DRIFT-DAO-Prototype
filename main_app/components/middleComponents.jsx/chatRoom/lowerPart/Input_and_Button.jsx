import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeinputVal } from "../../../../redux/slices/chatRoomSlice";

const Input_and_Button = () => {
  const [val, setval] = useState("");
  const dispatch = useDispatch();
  const { inputVal } = useSelector((state) => state.inputValue);
  return (
    <div className="flex justify-center mt-32">
      <div>
        <Input
          onChange={(e) => {
            setval(e.target.value);
          }}
          placeholder="Type your message..."
          width="35vw"
        />
      </div>
      <div className="ml-2">
        <Button
          color="success"
          rounded
          auto
          onClick={() => {
            dispatch(changeinputVal(val));
          }}
        >
          <Image src="/icons/sent.png" width="39" height="39" alt="load..." />
        </Button>
      </div>
    </div>
  );
};

export default Input_and_Button;
