import styled from "styled-components";
import { opacityAnimation } from "./styles";

export const ContainerFinal = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #0d4475;
  text-transform: uppercase;
  font-size: 18px;
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
  width: 80%;
  border: 1px solid black;
  margin: 4% auto;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
  div {
    margin: 0 2%;
    text-align: center;
    font-weight: bold;
    color: #0d4475;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    p {
      text-decoration: underline;
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
