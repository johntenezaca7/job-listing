import styled from "styled-components";
import { device } from "./Breakpoints";

const JobItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  border: none;
  border-radius: 5px;
  margin: 2.5rem 0 3rem;
  padding: 1rem 2rem;
  padding-bottom: 0;
  box-shadow:1px 4px 12px -4px var(--primary-color);
  transition: 0.3s;

  &:hover {
    border-left: 5px solid var(--primary-color);
  }

  .left-side,
  .right-side,
  .details-row {
    display: flex;
    align-items: center;

    h3, h4, p {
      margin: 0;
    }
  }

  .left-side {
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    top: -2.5rem;
  }

  .job-logo {
    width: 3rem;
    margin-bottom: .5rem;
    img {
      width: 100%;
      height: auto;
    }
  }

 .details-row {
   margin-bottom: .8rem;

  .company {
    color: var(--primary-color);
    margin-right: .8rem;
  }
  .new-listing,
  .featured-listing {
    margin-right: .5rem;
    color: white;
    background-color: var(--primary-color);
    border-radius: 2rem;
    padding: 5px;
    padding-top: 8px;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .featured-listing {
    background-color: var(--v-dark-gray-cyan);
  }
  &--position {
    transition: 0.3s;
    cursor: pointer;
    
    &:hover {
      color: var(--primary-color);
    }
  }
  &--dot-items {
    color: #929292;
    p {
      margin-right: .5rem;
      &::after {
        font-size: 20px;
        position: relative;
        top: 2px;
        content:" • ";
      }

      &:last-child {
        &::after {
          content:"";
      }
      }
    }
  }
 }

 .details-border {
    height: 5px;
    position: relative;
    top: -2.5rem;
    border-bottom: 1px solid #d2d2d2;
    width: 100%;
  }

  .right-side {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    top: -1rem;

    p {
      font-weight: bold;
      color: var(--primary-color);
      background-color: var(--background-color);
      padding: 10px;
      margin-right: 15px;
      margin-bottom: 10px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: var(--background-color);
        background-color: var(--primary-color);
      }
    }
  }

  @media ${device.desktop} { 
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;

    .details-border {
      display: none;
    }

    .left-side,
    .right-side {
      top: 0;
    }

    .left-side {
      flex-direction: row;
    }

    .job-logo {
      width: 6rem;
      margin-right: 1rem;
    }
  }
`;

export { JobItemStyles };