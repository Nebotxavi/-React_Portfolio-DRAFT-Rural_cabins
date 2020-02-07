import React from "react";
import styled from "styled-components";

import defaultImg from "../images/img1.jpg";

export const ImgContainer = ({ background = "default", children }) => {
  return <section className={background}>{children}</section>;
};

export const StyledImgContainer = styled.header`
  background: url(${props =>
    props.background ? props.background : defaultImg});
`;
