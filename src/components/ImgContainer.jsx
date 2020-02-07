import React from "react";

export const ImgContainer = ({ background = "default", children }) => {
  return <section className={background}>{children}</section>;
};
