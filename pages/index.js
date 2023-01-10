import Details from "../components/Details";
import Feature from "../components/Features";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <Slider />
      <Details />
      <Feature />
    </>
  );
}
