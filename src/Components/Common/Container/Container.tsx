import React from "react";
import "./Container.scss";

type ContainerType = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerType) => {
  return <div className="container">{children}</div>;
};

export default Container;
