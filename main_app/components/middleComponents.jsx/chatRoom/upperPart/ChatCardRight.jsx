import React from 'react'
import { Card, Grid, Text, Link } from "@nextui-org/react";


const ChatCardRight = () => {
  return (
    <Card css={{ p: "$2", mw: "500px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src="/icons/myaccount.png"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Wallat address
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$1" }}>
        <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
      </Card.Body>
    </Card>
  );
}

export default ChatCardRight