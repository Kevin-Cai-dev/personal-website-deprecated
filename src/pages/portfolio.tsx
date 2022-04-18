import type { NextPage } from 'next';

import { BackgroundColours } from '@website/common/constants';
import { portfolioMessages } from '@website/common/messages';
import { TitleScreen } from '@website/common/ui';

const PortfolioPage: NextPage = () => {
  const { title } = portfolioMessages;
  return <TitleScreen colour={BackgroundColours.BLUE} title={title} />;
};

export default PortfolioPage;
