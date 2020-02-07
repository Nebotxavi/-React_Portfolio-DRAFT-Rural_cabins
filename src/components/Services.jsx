import React from "react";

import { Title } from "./Title";
import { ServicesData } from "../data/ServicesData";

export const Services = () => {
  return (
    <section>
      <Title title="Services" />
      <div>
        {ServicesData.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
