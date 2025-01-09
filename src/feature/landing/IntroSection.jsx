import Button from "../../ui/Button";
import { FaCircle } from "react-icons/fa";
const IntroSection = () => {
  return (
    <div className="relative flex flex-row items-center justify-between p-20 sm:flex-col-reverse sm:text-center">
      <div className="lg:mr-6">
        <h1 className="text-4xl font-semibold text-mainGrayDark sm:mt-5 sm:text-4xl lg:text-6xl verySm:text-xl">
          Jobs and insights <br />
          <span className="text-mainGreen">from 2 years</span>
        </h1>
        <p className="py-5 font-normal text-mainGrayDark sm:text-base lg:text-lg">
          Where to explore your new opportunity in tech field
        </p>
        <Button design={"withoutBorder"}>Register</Button>
      </div>
      <div className="sm:w-72 verySm:w-52">
        <img
          src="../../../public/landingpage-1.png"
          alt="landingPagePhoto"
          className="w-full"
        />
      </div>
      <ul className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
        <li className="h-3 w-3 animate-bounce cursor-pointer rounded-full bg-mainGreen"></li>
        <li className="h-3 w-3 animate-[bounce_0.5s_0.1s_infinite] cursor-pointer rounded-full bg-mainGreen"></li>
        <li className="h-3 w-3 animate-[bounce_0.5s_0.2s_infinite] cursor-pointer rounded-full bg-mainGreen"></li>
        <FaCircle className="h-3 w-3 animate-bounce cursor-pointer rounded-full text-mainGreen" />
      </ul>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle fill="#4CAF4F" stroke="#4CAF4F" stroke-width="1" r="7.5" cx="20" cy="32.5">
        <animate attributeName="cy" calcMode="spline" dur="2" values="32.5;67.5;32.5;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
    </circle>
    <circle fill="#4CAF4F" stroke="#4CAF4F" stroke-width="1" r="7.5" cx="50" cy="32.5">
        <animate attributeName="cy" calcMode="spline" dur="2" values="32.5;67.5;32.5;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
    </circle>
    <circle fill="#4CAF4F" stroke="#4CAF4F" stroke-width="1" r="7.5" cx="80" cy="32.5">
        <animate attributeName="cy" calcMode="spline" dur="2" values="32.5;67.5;32.5;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
    </circle>
</svg> */}
    </div>
  );
};

export default IntroSection;
