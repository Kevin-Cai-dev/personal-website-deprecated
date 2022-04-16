import { ReactNode, useContext, useMemo } from "react";

import { DARK } from "@website/common/constants";
import { Context } from "@website/common/utils/theme";

import GlobalTheme, { ContentWrapper } from "./styled";
import Footer from "../footer";

interface Props {
  titleScreen: ReactNode;
  children: ReactNode;
}

const PageContainer = ({ titleScreen, children }: Props) => {
  const theme = useContext(Context);
  const isDarkMode = useMemo(() => (theme === DARK ? true : false), [theme]);

  return (
    <>
      <GlobalTheme isDarkMode={isDarkMode} />
      {titleScreen}
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
};

export default PageContainer;
