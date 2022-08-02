import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    margin: 4% auto;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-style: normal;
    z-index: 2;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 32px;
    justify-content: center;
    letter-spacing: 0.1em;
    margin: 4% auto;
    text-align: center;
    color: #0d4475;
  }
  a {
    color: #0d4475;
    font-size: 18px;
    font-weight: 500;
    width: 500px;
    text-align: center;
    border-radius: 7px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 4% auto;
    z-index: 3;
    cursor: pointer;
    border: 1px solid #0d4475;
    background-color: rgba(0, 0, 0, 0);
    transition: 1s;
    &:hover {
      transform: scale(1.1);
    }
  }
  img {
    width: 30%;
    margin: auto;
  }
`;
