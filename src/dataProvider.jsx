import React, { useState, useEffect, createContext } from "react";

import CabinData from "./data/cabinsData";

export const CabinContext = createContext();

export const CabinProvider = ({ children }) => {
  const [cabins, setCabins] = useState([]);
  const [featuredCabins, setFeaturedCabins] = useState([]);
  const [sortedCabins, setSortedCabins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterItems, setFilterItems] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false
  });
  console.log("FILTER ITEMS", filterItems);

  const mapData = items => {
    return items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      delete item.fields.images;
      return { ...item.fields, id, images };
    });
  };

  useEffect(() => {
    const cabins = mapData(CabinData);
    const featuredCabins = cabins.filter(room => room.featured);

    const maxPrice = Math.max(...cabins.map(cabin => cabin.price));
    const maxSize = Math.max(...cabins.map(cabin => cabin.size));

    setCabins(cabins);
    setFeaturedCabins(featuredCabins);
    setFilterItems(prevItems => ({
      ...prevItems,
      maxPrice,
      price: maxPrice,
      maxSize
    }));
    setSortedCabins(cabins);
    setLoading(false);
  }, []);

  useEffect(() => {
    let tempCabins = cabins;

    // Filter by type
    if (filterItems.type !== "all")
      tempCabins = tempCabins.filter(cabin => cabin.type === filterItems.type);

    // Filter by capacity
    tempCabins = tempCabins.filter(
      cabin => cabin.capacity >= filterItems.capacity
    );
    // Filter by price
    tempCabins = tempCabins.filter(cabin => cabin.price <= filterItems.price);

    // Filter by pets
    if (filterItems.pets) tempCabins = tempCabins.filter(cabin => cabin.pets);

    // Filter by pets
    if (filterItems.breakfast)
      tempCabins = tempCabins.filter(cabin => cabin.breakfast);

    setSortedCabins(tempCabins);
  }, [filterItems, cabins]);

  const getCabin = slug => {
    return cabins.find(cabin => cabin.slug === slug);
  };

  return (
    <CabinContext.Provider
      value={{
        cabins,
        featuredCabins,
        sortedCabins,
        filterItems,
        setFilterItems,
        loading,
        getCabin
      }}
    >
      {children}
    </CabinContext.Provider>
  );
};
