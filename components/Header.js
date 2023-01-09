import {
  HeaderLink,
  HeaderWrapper,
} from "../styles/styledComponents/HeaderStyles";

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <HeaderLink>Home |</HeaderLink>
        <HeaderLink> SiteMap |</HeaderLink>
        <HeaderLink> Contact |</HeaderLink>
        <HeaderLink> Purchase </HeaderLink>
      </div>
      <div>
        <HeaderLink> www.truetheme.net |</HeaderLink>
        <HeaderLink> @karmsss </HeaderLink>
      </div>
    </HeaderWrapper>
  );
}
