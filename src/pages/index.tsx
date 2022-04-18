import type { NextPage } from 'next';

import { BackgroundColours } from '@website/common/constants';
import { homeMessages } from '@website/common/messages';
import { TitleScreen } from '@website/common/ui';
import About from '@website/components/about';

const HomePage: NextPage = () => {
  const { prefix, title } = homeMessages;
  return (
    <>
      <TitleScreen
        colour={BackgroundColours.RED}
        prefix={prefix}
        title={title}
      />
      <About />
    </>
  );
};

export default HomePage;
