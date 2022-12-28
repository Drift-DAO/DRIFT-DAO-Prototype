import React, { useEffect, useState } from "react";
import { Orbis } from "@orbisclub/orbis-sdk";
import CreateAnnouncementPost from "./CreateAnnouncementPost";
import AnnouncementCard from "./AnnouncementCard";
import SimpleBar from "simplebar-react";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

let orbis = new Orbis();
const MainAnnouncement = () => {
  const { leftSide, rightSide } = useSelector((state) => state.leftRight);
  const { value } = useSelector((state) => state.refreshPage);

  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [value, leftSide]);

  const fetchData = async () => {
    setLoading(true);
    let res = await orbis.isConnected();
    if (!res) {
      await orbis.connect_v2({
        provider: window.ethereum,
        lit: false,
      });
    }

    let { data, error } = await orbis.getPosts({
      context: `${leftSide}-${rightSide}`,
    });

    setAllAnnouncements(data);
    setLoading(false);
  };

  return (
    <div>
      <div style={{ height: "80vh" }} className="py-2 overflow-hidden">
        {loading ? (
          <div className="flex justify-center" style={{ height: "80vh" }}>
            <ReactLoading
              type="spinningBubbles"
              color="white"
              height={75}
              width={75}
              className="my-auto"
            />
          </div>
        ) : (
          <SimpleBar style={{ maxHeight: "80vh" }}>
            {allAnnouncements.map((announcement, index) => (
              <AnnouncementCard
                key={index}
                title={announcement.content.title}
                desc={announcement.content.body}
                by={announcement.creator}
              />
            ))}
          </SimpleBar>
        )}
      </div>
      <div>
        <hr className="py-3" />
        <CreateAnnouncementPost />
      </div>
    </div>
  );
};

export default MainAnnouncement;
