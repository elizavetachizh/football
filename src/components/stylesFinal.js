import styled from "styled-components";

export const ContainerFinal = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const TableStyleForFinal = styled.div`
  border-spacing: 0;
  width: 90%;
  border: 1px solid black;
  margin: 4% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div:last-child {
    border-left: 1px solid black;
  }
  div:first-child {
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    color: #0d4475;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  iframe {
    margin: 0 auto;
    text-align: center;
  }
`;
