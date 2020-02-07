import React from "react";

export const Banner = ({ title, subtitle, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div></div>
      <h6>{subtitle}</h6>
      {children}
    </div>
  );
};
