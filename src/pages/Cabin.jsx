import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Banner } from "../components/Banner";
import { CabinContext } from "../dataProvider";
import { StyledImgContainer } from "../components/ImgContainer";

export const Cabin = ({ match }) => {
  const { getCabin } = useContext(CabinContext);
  const cabinSlug = match.params.id;
  const cabin = getCabin(cabinSlug);

  if (!cabin) {
    return (
      <div>
        <h3>Cabin not found.</h3>
        <Link to="./rooms">Back to rooms</Link>
      </div>
    );
  }

  const {
    name,
    type,
    price,
    size,
    capacity,
    pets,
    breakfast,
    description,
    extras,
    images
  } = cabin;

  const [mainImage, ...roomImages] = images;

  return (
    <>
      <StyledImgContainer background={mainImage}>
        <Banner title={name}>
          <Link to="/cabins">Back to cabins</Link>
        </Banner>
      </StyledImgContainer>
      <div>
        {roomImages.map((image, index) => {
          return <img key={index} src={image} alt="" />;
        })}
      </div>
      <div>
        <div>
          <div>
            <h3>Details</h3>
            <p>{description}</p>
          </div>
          <div>
            <h3>Info</h3>
            <p>{`Price: ${price}€`}</p>
            <p>{`Size: ${size} m²`}</p>
            <p>{`Max capacity: ${capacity}`}</p>
            {pets && <p>Pets allowed</p>}
            {breakfast && <p>Breakfast included</p>}
          </div>
        </div>
        <div>
          <h5>Extras</h5>
          {extras.map((extra, index) => (
            <p key={`extra_${index}`}>{extra}</p>
          ))}
        </div>
      </div>
    </>
  );
};
