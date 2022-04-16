import type { NextPage } from "next";

import name from "@website/common/constants";

const HomePage: NextPage = () => {
  return <div>{name}</div>;
};

export default HomePage;
