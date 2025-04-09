import HeroSection from "./components/HeroSection";
import Steps from "./components/Steps";
import Story from "./components/Story";
import Customer from "./components/Customer";
import Services from "./components/Services";
import Why_Choose from "./components/Why_Choose";
import CoreValues from "./components/CoreValues";
import Choose from "./components/Choose";

export default function Home() {
  return (
    <div className="scrollbar scrollbar-none bg-black">
      <HeroSection />
      <Why_Choose />
      <Choose/>
      {/* <Demo /> */}
      <Services />
      <Steps />
      <Story />
      <CoreValues/>
      <Customer />
    </div>
  );
}
