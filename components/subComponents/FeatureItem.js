import { SliderImage } from "../../constants/images";
import {
  FeatureDetails,
  FeatureHeading,
  FeatureImage,
  FItemWrapper,
} from "../../styles/styledComponents/FeatureItemStyles";

export default function FeatureItem() {
  return (
    <FItemWrapper>
      <FeatureImage src={SliderImage} />
      <FeatureHeading>100+ themes to select</FeatureHeading>
      <FeatureDetails>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </FeatureDetails>
    </FItemWrapper>
  );
}
