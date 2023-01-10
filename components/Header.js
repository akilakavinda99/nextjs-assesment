import {
  HeaderLink,
  HeaderWrapper,
} from "../styles/styledComponents/HeaderStyles";
import { HeaderData } from "../constants/data";

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        {HeaderData.map((data) => (
          <HeaderLink>{data}</HeaderLink>
        ))}
      </div>
      <div>
        <HeaderLink> www.truetheme.net |</HeaderLink>
        <HeaderLink> @karmsss </HeaderLink>
      </div>
    </HeaderWrapper>
  );
}
