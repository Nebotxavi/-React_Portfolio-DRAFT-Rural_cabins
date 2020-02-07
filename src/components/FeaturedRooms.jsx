import React, { useContext } from "react";

import { CabinContext } from "../dataProvider";
import { Loading } from "../components/Loading";
import { Title } from "./Title";
import { RoomThumbnail } from "./RoomThumbnail";

export const FeaturedRooms = () => {
  const { loading, featuredRooms: rooms } = useContext(CabinContext);
  const room = rooms.map(item => {
    return <RoomThumbnail key={item.id} room={item} />;
  });

  return (
    <section>
      <Title title="Featured Rooms" />
      {loading ? <Loading /> : room}
    </section>
  );
};
