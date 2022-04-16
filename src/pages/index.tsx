import type { NextPage } from "next";

import { PageContainer } from "@website/common/ui";
import name from "@website/common/constants";
import TitleScreen from "@website/common/ui/title-screen";

const HomePage: NextPage = () => {
  return <PageContainer titleScreen={<TitleScreen />}>{name}</PageContainer>;
};

export default HomePage;
