import styled from 'styled-components';

const FilterContainerStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
  box-shadow:1px 4px 12px -4px var(--primary-color);
  position: relative;
  top: -3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 3rem 1rem;

  .tags-container {
    display: flex;
    flex-wrap: wrap;
  }

  .placeholder-text {
    color: #929292;
    letter-spacing: 2px;
    font-size: 18px;
    margin: 0;
  }

  .filtered-item {
    display: flex;
    align-items: baseline;
    color: var(--primary-color);
    margin-right: 2rem;
    margin-bottom: 1rem;

    .text-wrapper {
      background-color: var(--background-color);
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 10px;
      padding-bottom: 6px;
      p {
        font-weight: bold;
        margin: 0;
        font-size: 12px;
      }
    }

    .icon-wrapper {
      background-color: var(--primary-color);
      padding: 7px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      position: relative;
      top: 2px;
      padding-bottom: 3px;
      cursor: pointer;

      &:hover {
        background-color: var( --v-dark-gray-cyan );
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .clear-btn {
    color: #929292;
    font-weight: bold;
    cursor: pointer;

    transition: 0.3s;

    &:hover {
      text-decoration: underline;
      color: var(--primary-color);
    }
  }
`;

export { FilterContainerStyles };