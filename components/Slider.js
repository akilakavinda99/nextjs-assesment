import { SliderData } from "./subComponents/SliderData";
import SliderDots from "./subComponents/SliderDots";

export default function Slider() {
  return (
    <>
      <div
        style={{
          marginTop: 30,
          marginLeft: 30,
          marginRight: 300,
          borderRadius: 30,
        }}
      >
        <SliderData heading="20 Gorgeous Color Variations" />
        <SliderDots />
      </div>
    </>
  );
}
