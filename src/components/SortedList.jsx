import React, { useContext } from "react";

import { CabinContext } from "../dataProvider";
import { RoomThumbnail } from "../components/RoomThumbnail";

export const SortedList = () => {
  const { sortedCabins } = useContext(CabinContext);

  const cabinThumbnails = sortedCabins.map(item => {
    return <RoomThumbnail key={item.id} room={item} />;
  });

  return <div>{cabinThumbnails}</div>;
};
