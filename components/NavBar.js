import {
  LogoContainer,
  LogoImage,
  LogoText,
  LogoText1,
  LogoText2,
  NavBarWrapper,
} from "../styles/styledComponents/NavBarStyles";
import { NavBarItem } from "./subComponents/NavBarItem";
import { NavBarData } from "../constants/data";
import { logo } from "../constants/images";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <LogoContainer>
        <LogoImage src={logo} />
        <LogoText>
          <LogoText1>KA</LogoText1>
          <LogoText2>RMA</LogoText2>
        </LogoText>
      </LogoContainer>
      <div
        style={{
          display: "flex",
        }}
      >
        {NavBarData.map((data) => (
          <NavBarItem heading={data.heading} details={data.details} />
        ))}
      </div>
    </NavBarWrapper>
  );
}
