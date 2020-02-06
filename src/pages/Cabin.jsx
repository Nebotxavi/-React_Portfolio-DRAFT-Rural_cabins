import React from "react";

export const Cabin = ({ match }) => {
  const cabinSlug = match.params.id;

  return <div>Hi from cabin {cabinSlug}</div>;
};
