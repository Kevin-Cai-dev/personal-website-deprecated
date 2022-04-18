import type { NextPage } from 'next';

import { BackgroundColours } from '@website/common/constants';
import { keyboardMessages } from '@website/common/messages';
import { TitleScreen } from '@website/common/ui';

const KeyboardsPage: NextPage = () => {
  const { title } = keyboardMessages;
  return <TitleScreen colour={BackgroundColours.ORANGE} title={title} />;
};

export default KeyboardsPage;
