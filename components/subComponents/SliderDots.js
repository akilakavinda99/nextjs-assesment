import {
  Dots,
  DotsWrapper,
} from "../../styles/styledComponents/SliderDotsStyles";

export default function SliderDots() {
  return (
    <DotsWrapper>
      <Dots />
      <Dots active={true} />
      <Dots />
    </DotsWrapper>
  );
}
