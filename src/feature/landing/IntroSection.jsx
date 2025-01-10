import Button from "../../ui/Button";
const IntroSection = () => {
  return (
    <div className="min-h-[calc(100vh-97px)]  flex flex-row items-center justify-between p-20 sm:flex-col-reverse sm:text-center">
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
      </ul>
    </div>
  );
};

export default IntroSection;
