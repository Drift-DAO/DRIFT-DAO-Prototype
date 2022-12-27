import React from 'react'
import { Button } from "@nextui-org/react";
import { Tooltip } from '@nextui-org/react';


const Exit_DAO = () => {
  return (
    <div>
    <Tooltip
          color="error"
          content="leave DAO"
          placement="left"
        >
      <Button  color="error" size="md">
        leave DAO
      </Button>
      </Tooltip>
    </div>
  );
}

export default Exit_DAO