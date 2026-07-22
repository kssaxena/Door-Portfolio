// import ProductCard from "../../components/ui/ProductCard";
import EnquiryForm from "../../components/EnquiryForm";
import MaterialStudy from "../../components/ui/ProductCard";
import DoorSpecialization from "./doorSpecialization";
import DoorTypes from "./doorTypes";
import InstalledDoorSection from "./installedDoorSection";
import Landing from "./landing";
import Observation from "./observation";
import Process from "./process";

const Hero = () => {
  return (
    <div>
      <Landing />
      <DoorTypes />
      <MaterialStudy />
      <InstalledDoorSection />
      <Observation />
      <Process />
      <EnquiryForm />
    </div>
  );
};

export default Hero;
