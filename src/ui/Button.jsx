const Button = ({ design, style, children }) => {
  let styleBtn = "";
  if (design === "withBorder")
    styleBtn =
      "text-mainGreen border-mainGreen rounded-md border-2 bg-transparent px-5 py-2 text-xl";
  else if (design === "withoutBorder")
    styleBtn =
      "bg-mainGreen border-mainGreen  rounded-md border-2 px-5 py-2 text-xl text-white lg:inline";

  return <button className={`${styleBtn} ${style}`}>{children}</button>;
};

export default Button;
