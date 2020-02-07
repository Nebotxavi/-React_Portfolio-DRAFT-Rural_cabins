import React, { useState, useEffect, createContext } from "react";

import CabinData from "./data/cabinsData";

export const CabinContext = createContext();

export const CabinProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const mapData = items => {
    return items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      delete item.fields.images;
      return { ...item.fields, id, images };
    });
  };

  useEffect(() => {
    const rooms = mapData(CabinData);
    const featuredRooms = rooms.filter(room => room.featured);

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
  }, []);

  return (
    <CabinContext.Provider value={{ rooms, featuredRooms, loading }}>
      {children}
    </CabinContext.Provider>
  );
};
