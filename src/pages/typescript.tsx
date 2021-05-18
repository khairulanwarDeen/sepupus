import { PageProps } from "gatsby";
import React from "react";

type City = "ny" | "san";
const typescript: React.FC<PageProps> = () => {
  let newCity: City;
  newCity = "san";
  console.log(newCity);
  return <div>Hello from typescript</div>;
};

export default typescript;
