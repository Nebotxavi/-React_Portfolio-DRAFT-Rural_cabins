import React, { useContext } from "react";

import { CabinContext } from "../dataProvider";

export const FiltersList = () => {
  const { cabins, filterItems, setFilterItems } = useContext(CabinContext);

  const {
    type,
    capacity,
    minPrice,
    maxPrice,
    price,
    minSize,
    maxSize,
    pets,
    breakfast
  } = filterItems;

  const optionsType = ["all", ...new Set(cabins.map(cabin => cabin.type))];
  const optionsCapacity = [...new Set(cabins.map(cabin => cabin.capacity))];

  function handleChange(e) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFilterItems(prevItems => ({ ...prevItems, [name]: value }));
  }

  return (
    <>
      <div>
        {/* Room type */}
        <label htmlFor="select-type">Room type</label>
        <select
          name="type"
          id="select-type"
          onChange={handleChange}
          value={type}
        >
          {optionsType.map((item, index) => {
            return (
              <option key={`type_${index}`} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {/* Guests */}
        <label htmlFor="select-guests">Guests</label>
        <select
          name="capacity"
          id="select-guests"
          onChange={handleChange}
          value={capacity}
        >
          {optionsCapacity.map((item, index) => {
            return (
              <option key={`capacity_${index}`} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {/* Room Price */}
        <label htmlFor="input-price">{price}</label>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleChange}
        />
      </div>
      <div>
        {/* Room Size */}
        <label htmlFor="input-size">Room Size</label>
        <input
          type="number"
          name="minSize"
          value={minSize}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxSize"
          value={maxSize}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="checkbox-pets">pets</label>
        <input
          type="checkbox"
          name="pets"
          checked={pets}
          id="checkbox-pets"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="checkbox-breakfast">breakfast</label>
        <input
          type="checkbox"
          name="breakfast"
          id="checkbox-breakfast"
          checked={breakfast}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
