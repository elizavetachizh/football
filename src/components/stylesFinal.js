import styled from "styled-components";
import { opacityAnimation } from "./styles";

export const ContainerFinal = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  color: #0d4475;
  text-transform: uppercase;
  font-size: 18px;
  h2 {
    font-weight: bold;
  }
`;
export const ContainerThirdPlace = styled.div`
  display: none;
  &.shake {
    display: block;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #0d4475;
    text-transform: uppercase;
    font-size: 18px;
  }
`;
export const TableStyleForFinal = styled.div`
  border-spacing: 0;
  width: 90%;
  margin: 4% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid #0d4475;
  height: fit-content;
  div {
    margin: 0 auto;
    text-align: center;
    color: #0d4475;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;

    p {
      font-size: 14px;
      @media (max-width: 800px) {
        font-size: 12px;
      }
    }
    div:first-child {
      display: flex;
      flex-direction: column;
      border-right: 1px solid #0d4475;
      strong {
        font-size: 1.2rem;
        @media (max-width: 800px) {
          font-size: 1rem;
        }
        font-weight: bold;
      }
    }
    div:last-child {
      display: flex;
      flex-direction: column;
      strong {
        font-size: 1.2rem;
        @media (max-width: 800px) {
          font-size: 1rem;
        }
        font-weight: bold;
      }
    }
  }
`;

export const ContainerForBlocksFinal = styled.div`
  display: none;
  &.shake {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
    opacity: 0;
    animation: ${opacityAnimation} 2s forwards;
`;
