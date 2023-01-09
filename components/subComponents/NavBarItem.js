import {
  Column,
  Details,
  Heading,
  ItemWrapper,
  Line,
} from "../../styles/styledComponents/NavBarItemStyles";

export const NavBarItem = (props) => {
  return (
    <ItemWrapper>
      <Line />
      <Column>
        <Heading>{props.heading}</Heading>
        <Details>{props.details}</Details>
      </Column>
    </ItemWrapper>
  );
};
