import React from "react";

const sizeClasses = {
  txtSairaRomanRegular1232Black900: "font-normal font-saira",
  txtSairaRomanRegular1408: "font-normal font-saira",
  txtSairaRomanRegular88: "font-normal font-saira",
  txtPostNoBillsColomboExtraBold5632:
    "font-extrabold font-postnobillscolomboextrabold",
  txtSairaRomanExtraBold176: "font-extrabold font-saira",
  txtSairaRomanSemiBold1408: "font-saira font-semibold",
  txtSairaRomanRegular1232: "font-normal font-saira",
  txtSairaRomanLight1144: "font-light font-saira",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
