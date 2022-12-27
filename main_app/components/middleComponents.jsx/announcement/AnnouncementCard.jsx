import React from "react";
import { Card, Grid, Text, Button, Row, Spacer } from "@nextui-org/react";

const AnnouncementCard = () => {
  return (
    <Card css={{ mw: "400px" }}>
      <Text
        size={20}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
          py: "$8",
        }}
        weight="bold"
        className="text-center"
      >
        📢 Make the Web
      </Text>
      <Card.Divider />
      <Card.Body css={{ py: "$10    " }}>
        <Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Text>
      </Card.Body>
      <Card.Divider />
    </Card>
  );
};

export default AnnouncementCard;
