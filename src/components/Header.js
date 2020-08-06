import React from "react";
import DesktopHeaderImg from "./images/bg-header-desktop.svg";
import MobileHeaderImg from "./images/bg-header-mobile.svg";
import { HeaderStyles } from "./styles";

function Header() {
  return (
    <HeaderStyles>
      <img className="desktop" src={DesktopHeaderImg} alt="Background design"/>
      <img className="mobile" src={MobileHeaderImg} alt="Background design"/>
    </HeaderStyles>
  )
};

export { Header }; 