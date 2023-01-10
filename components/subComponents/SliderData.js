import {
  Details,
  Heading,
  Image,
  ImageDiv,
  TextWrapper,
  Wrapper,
} from "../../styles/styledComponents/SliderDataStyles";
import { SliderImage } from "../../constants/images";

export const SliderData = (props) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Heading>{props.heading}</Heading>
        <Details>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, more recently
        </Details>
      </TextWrapper>

      <ImageDiv>
        <Image src={SliderImage} />
      </ImageDiv>
    </Wrapper>
  );
};
