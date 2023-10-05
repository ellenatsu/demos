import React from "react";
import projects from "../assets/data";

export const Projects = () => {
  const { viewport } = useThree();

  return <group position-y={-viewport.height * 2 + 1}></group>;
};
