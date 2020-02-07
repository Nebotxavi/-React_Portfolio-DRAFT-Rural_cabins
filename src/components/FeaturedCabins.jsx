import React, { useContext } from "react";

import { CabinContext } from "../dataProvider";
import { Loading } from "./Loading";
import { Title } from "./Title";
import { RoomThumbnail } from "./RoomThumbnail";

export const FeaturedCabins = () => {
  const { loading, featuredCabins: cabins } = useContext(CabinContext);
  const roomThumbnails = cabins.map(item => {
    return <RoomThumbnail key={item.id} room={item} />;
  });

  return (
    <section>
      <Title title="Featured Rooms" />
      {loading ? <Loading /> : roomThumbnails}
    </section>
  );
};
