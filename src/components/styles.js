import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  div {
    margin: 0 auto;
  }
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
  max-width: 980px;
  margin: 0 auto;
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
    width: 40%;
    text-align: center;
    border-radius: 7px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 2% auto;
    cursor: pointer;
    border: 1px solid #0d4475;
    background-color: rgba(0, 0, 0, 0);
    transition: 1s;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 840px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 14px;
      height: 40px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      width: 50%;
    }
  }
`;

export const Logo = styled.img`
  width: 100%;
`;
export const Image = styled.div`
  position: absolute;
  margin-bottom: 0;
  padding-bottom: 0;
  img {
    width: 100%;
  }
`;
export const Arka = styled.img`margin-top: 1100px;
    width: 100%;`
export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-end;
`;

export const Text = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export const MingasLogo = styled.img`
  width: 60%;
  height: 60%;
`;
