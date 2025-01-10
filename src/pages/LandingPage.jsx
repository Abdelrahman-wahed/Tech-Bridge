import IntroSection from "../feature/landing/IntroSection";
import Header from "../ui/Header";

function LandingPage() {
  return (
    <div>
      <div className="relative bg-mainWhite px-4 xl:px-20">
        <Header />
        <IntroSection />
      </div>
    </div>
  );
}

export default LandingPage;
