import {
  LogoContainer,
  LogoImage,
  LogoText,
  LogoText1,
  LogoText2,
  NavBarWrapper,
} from "../styles/styledComponents/NavBarStyles";
import { NavBarItem } from "./subComponents/NavBarItem";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <LogoContainer>
        <LogoImage src="https://i.postimg.cc/sxvTMJnC/6303a086ab1b900654aad3a0.png" />
        <LogoText>
          <LogoText1>KA</LogoText1>
          <LogoText2>RMA</LogoText2>
        </LogoText>
      </LogoContainer>
      <div>
        <NavBarItem heading="Features" details="all about features" />
        <NavBarItem heading="Features" details="all about features" />
        <NavBarItem heading="Features" details="all about features" />
        <NavBarItem heading="Features" details="all about features" />
      </div>
    </NavBarWrapper>
  );
}
