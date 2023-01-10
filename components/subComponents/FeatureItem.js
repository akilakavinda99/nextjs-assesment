import {
  FeatureDetails,
  FeatureHeading,
  FeatureImage,
  FItemWrapper,
} from "../../styles/styledComponents/FeatureItemStyles";

export default function FeatureItem(props) {
  return (
    <FItemWrapper>
      <FeatureImage src={props.image} />
      <FeatureHeading>{props.heading}</FeatureHeading>
      <FeatureDetails>{props.description}</FeatureDetails>
    </FItemWrapper>
  );
}
