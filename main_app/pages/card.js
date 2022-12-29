import React from "react";
import { Card } from "@nextui-org/react";
import { Button, Progress, Grid, Text } from "@nextui-org/react";

const card = () => {
  return (
    <div className="flex justify-center justify-items-center my-4">
      <Card variant="bordered" style={{ width: "60vw" }}>
        <Card.Body>
          <div className="pb-3 mx-4">
            <div className="text-2xl font-bold text-red-600">
              🔥 🚀 Voters who had chosen the defeated choice as number one now
              have their number two choice counted as number one choice.
            </div>
            <div className="text-md py-4">
              Each voter may rank the different choices in any order. Votes are
              initially counted for each voter's number one choice. If a
              candidate has more than half of the vote based on number one
              choices, that choice wins. If not, then the choice with the fewest
              number one votes is eliminated. Voters who had chosen the defeated
              choice as number one now have their number two choice counted as
              number one choice. The process continues over multiple rounds
              until a choice has more than half the votes.
            </div>
          </div>
          <hr className="py-3" />
          <div className="flex justify-center">
            <Button bordered color="gradient" style={{ width: "50vw" }}>
              Gradient
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default card;
