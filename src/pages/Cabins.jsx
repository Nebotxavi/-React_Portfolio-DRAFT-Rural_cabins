import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "../components/Banner";
import { ImgContainer } from "../components/ImgContainer";
import { Title } from "../components/Title";
import { FiltersList } from "../components/FiltersList";
import { SortedList } from "../components/SortedList";

export const Cabins = () => {
  return (
    <>
      <div>
        <ImgContainer>
          <Banner title="Our cabins">
            <Link to="/">Return home</Link>
          </Banner>
        </ImgContainer>
      </div>
      <div>
        <div>
          <Title title="Search Rooms" />
        </div>
        <div>
          <FiltersList />
          <SortedList />
        </div>
      </div>
    </>
  );
};
