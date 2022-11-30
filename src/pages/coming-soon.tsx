import styled, { css } from 'styled-components';
import KingPadSvg from '../assets/svg/kingpad.svg';
import KingLogoSvg from '../assets/svg/footerlogo.svg';
import DeskKingpadVisualSvg from '../assets/png/kingpad-visual.png';
import MobKingpadVisualSvg from '../assets/png/kingpad-visual-mobile.png';
import TelegramSvg from '../assets/icon/icon-telegram.svg';
import TwitterSvg from '../assets/icon/icon-twitter.svg';

export const ComingSoon = () => {
  return (
    <Container>
      <KingpadLogo src={KingPadSvg} alt="king-pad-logo" />
      <KingpadVisual src={DeskKingpadVisualSvg} className="sm:block hidden" />
      <KingpadVisual src={MobKingpadVisualSvg} className="sm:hidden block" />
      <ButtonGroup>
        <SocialLeftBtn>
          <Img src={TelegramSvg} alt="telegra-svg" />
        </SocialLeftBtn>
        <SocialRightBtn>
          <Img src={TwitterSvg} alt="telegra-svg" />
        </SocialRightBtn>
      </ButtonGroup>
      <PoweredBy>
        <SmallText>Powered by</SmallText>
        <KingLogo src={KingLogoSvg} alt="king-logo" />
      </PoweredBy>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KingpadLogo = styled.img`
  width: 110px;
  height: auto;
  padding-top: 4rem;
`;

const KingpadVisual = styled.img`
  width: 640px;
  height: auto;
  padding-top: 1rem;
`;

const ButtonGroup = styled.div`
  background: #171717 0% 0% no-repeat padding-box;
  border-radius: 31px;
  height: 50px;
  width: 120px;
  display: flex;
  margin-top: 2rem;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const SocialBtn = css`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all linear 0.3s;
  &:hover {
    background-color: rgb(34, 33, 33);
  }
`;

const SocialLeftBtn = styled.div`
  ${SocialBtn}
  border-radius: 31px 0 0 31px;
`;
const SocialRightBtn = styled.div`
  ${SocialBtn}
  border-radius: 0 31px 31px 0;
`;

const PoweredBy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
`;

const SmallText = styled.div`
  font-size: 16px;
`;

const KingLogo = styled.img`
  width: 80px;
  height: 80px;
`;
