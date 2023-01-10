import {
  Details,
  Heading,
  Image,
  ImageDiv,
  Wrapper,
} from "../../styles/styledComponents/SliderDataStyles";

export const SliderData = (props) => {
  return (
    <Wrapper>
      <div
        style={{
          marginRight: 250,
          marginLeft: 80,
        }}
      >
        <Heading>{props.heading}</Heading>
        <Details>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, more recently
        </Details>
      </div>
      <ImageDiv>
        <Image src="https://i.postimg.cc/25rZ5FGc/pexels-ngai-man-yan-842153.jpg" />
      </ImageDiv>
    </Wrapper>
  );
};
