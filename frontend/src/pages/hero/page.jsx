import DoorSpecialization from "./doorSpecialization";
import DoorTypes from "./doorTypes";
import Landing from "./landing";

const Hero = () => {
  return (
    <div>
      <Landing />
      <DoorTypes/>
      <DoorSpecialization />
    </div>
  );
};

export default Hero;
