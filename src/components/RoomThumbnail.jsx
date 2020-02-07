import React from "react";
import { Link } from "react-router-dom";

import defaultImage from "../images/img1.jpg";

export const RoomThumbnail = ({ room }) => {
  const { slug, images, price, name } = room;
  return (
    <div>
      <div>
        <Link to={`./cabins/${slug}`}>
          <img src={images[0] || defaultImage} alt="" />
          <p>features</p>
        </Link>
      </div>
      <div>
        <p>{price}€</p>
        <p>per night</p>
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};
