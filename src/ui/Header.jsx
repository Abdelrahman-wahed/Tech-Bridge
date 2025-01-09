import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";
function Header() {
  const [isShowing, setIsShowing] = useState(false);

  window.onresize = () => {
    if (window.innerWidth >= 1280) setIsShowing(false);
  };
  return (
    <div className="relative flex items-center justify-between pt-2">
      <img
        src="./logo_title.png"
        alt="logo"
        className="sm:w-48 md:w-56 lg:w-60 verySm:w-32"
      />

      <ul
        className={` ${isShowing ? "showBurgerIcon" : "hidden items-center justify-center space-x-8 pt-2 lg:flex"} `}
      >
        <li
          className={`activeBar cursor-pointer text-xl ${isShowing && "lisInBar"}`}
        >
          Home
        </li>
        <li
          className={`cursor-pointer text-xl font-normal ${isShowing && "lisInBar"}`}
        >
          Services
        </li>
        <li
          className={`cursor-pointer text-xl font-normal ${isShowing && "lisInBar"}`}
        >
          About
        </li>
        <li
          className={`cursor-pointer text-xl font-normal ${isShowing && "lisInBar"}`}
        >
          More
        </li>
      </ul>

      <div className="flex items-center space-x-10  verySm:space-x-2">
        <div className="space-x-4 lg:pt-2">
          <Button design="withBorder" style={"verySm:text-xs verySm:px-1 verySm:py-1"}>login</Button>
          <Button design="withoutBorder" style={"hidden"} >Sign up</Button>
        </div>
        <span
          className="cursor-pointer lg:hidden"
          onClick={() => setIsShowing((prev) => !prev)}
        >
          <RxHamburgerMenu className="text-4xl" />
        </span>
      </div>
    </div>
  );
}

export default Header;
