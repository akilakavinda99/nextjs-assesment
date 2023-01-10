import { FeatureData } from "../constants/data";
import { FeaturesWrapper } from "../styles/styledComponents/FeaturesStyles";
import FeatureItem from "./subComponents/FeatureItem";

export default function Feature() {
  return (
    <FeaturesWrapper>
      {FeatureData.map((data) => (
        <FeatureItem
          image={data.image}
          heading={data.heading}
          description={data.description}
        />
      ))}
    </FeaturesWrapper>
  );
}
