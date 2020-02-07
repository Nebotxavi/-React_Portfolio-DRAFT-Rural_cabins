import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "../components/Banner";
import { FeaturedCabins } from "../components/FeaturedCabins";
import { ImgContainer } from "../components/ImgContainer";
import { Services } from "../components/Services";
import { SeparationImg } from "../components/SeparationImg";

export const Home = () => {
  return (
    <>
      <ImgContainer>
        <Banner title="title" subtitle="subtitle">
          <Link to="/cabins">Cabins</Link>
        </Banner>
      </ImgContainer>

      <Services />
      <SeparationImg />
      <FeaturedCabins />
    </>
  );
};
