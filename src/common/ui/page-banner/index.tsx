import { BackgroundColours } from '@website/common/constants';

import BannerLinks from './banner-links';
import {
  PageBannerContainer,
  Background,
  ContentContainer,
  MainHeader,
  Prefix,
} from './styled';

interface Props {
  colour: BackgroundColours;
  prefix?: string;
  title: string;
}

const TitleScreen = ({ colour, prefix, title }: Props) => {
  return (
    <PageBannerContainer>
      <Background colour={colour} />
      <ContentContainer>
        {prefix && <Prefix>{prefix}</Prefix>}
        <MainHeader>{title}</MainHeader>
        <BannerLinks />
      </ContentContainer>
    </PageBannerContainer>
  );
};

export default TitleScreen;
