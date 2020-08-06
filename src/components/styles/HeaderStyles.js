import styled from "styled-components";
import { device } from "./Breakpoints";

const HeaderStyles = styled.section`
  width: 100%;
  height: auto;
  background-color: var(--primary-color);

  img {
    width: 100%;
    height: 100%;;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  @media ${device.desktop} { 
    .desktop {
      display: block;
    }

    .mobile {
      display: none;
    }
  }
`;

export { HeaderStyles };