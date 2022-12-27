import React from "react";
import { Collapse, Grid, Text } from "@nextui-org/react";
import { Button, Spacer } from "@nextui-org/react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const Right = () => {
  return (
      <SimpleBar style={{ maxHeight: "80vh" }}>
        <Grid.Container gap={2} accordion={true}>
          <Grid>
            <Collapse
              shadow
              title="Announcements"
              subtitle="description"
              expanded
            >
              <Button className="bg-blend-color" rounded flat>
                General
              </Button>
              <Button className="bg-blend-color mt-3" rounded flat>
                Technical
              </Button>
            </Collapse>
          </Grid>
          <Grid>
            <Collapse.Group shadow>
              <Collapse title="Chat_Room" expanded>
                <Button className="bg-blend-color" rounded flat>
                  General
                </Button>
                <Button className="bg-blend-color mt-3" rounded flat>
                  Technical
                </Button>
                <Button className="bg-blend-color mt-3" rounded flat>
                  Important
                </Button>
                <Button className="bg-blend-color mt-3" rounded flat>
                  Doubts
                </Button>
              </Collapse>
              <Collapse title="Forum" expanded>
                <Button className="bg-blend-color" rounded flat>
                  General Discussion
                </Button>
                <Button className="bg-blend-color mt-3" rounded flat>
                  Improvement Proposal
                </Button>
                <Button className="bg-blend-color mt-3" rounded flat>
                  Grant Program
                </Button>
                <Button className="bg-blend-color mt-3" rounded flat>
                  Important Discussion
                </Button>
              </Collapse>
              <Collapse title="Proposal" expanded>
                <Button className="bg-blend-color" rounded flat>
                  RPF
                </Button>
                <Button className="bg-blend-color mt-3" rounded flat>
                  On-Chain Voting
                </Button>
              </Collapse>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </SimpleBar>
  );
};

export default Right;
