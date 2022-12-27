import React from 'react'
import { Button } from "@nextui-org/react";
import { Tooltip } from '@nextui-org/react';


const DAO_detail = () => {
  return (
    <div>
        <Tooltip
          color="secondary"
          content="see the details of the DAO"
          placement="left"
        >
      <Button bordered color="gradient" size="md">
        DAO details
      </Button>
      </Tooltip>
    </div>
  );
}

export default DAO_detail