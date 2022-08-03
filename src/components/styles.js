import styled, { keyframes } from "styled-components";
const opacityAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: url(${require("../assets/chel_1.png")}) left 38% no-repeat, url(${require("../assets/chel_2.png")}) 100% 58% no-repeat, url(${require("../assets/chel_3.png")}) left bottom no-repeat;
  background-size: 20%;
);

`;
export const TableStyle = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 1px solid black;
  margin: 4% auto;
  text-align: center;
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
    padding: 0.3rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    word-wrap: break-word;
    :last-child {
      border-right: 0;
    }
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const Home = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1050px) {
    width: 1050px;
  }
  h1 {
    font-style: normal;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 32px;
    justify-content: center;
    margin: 4% auto;
    text-align: center;
    color: #0d4475;
  }
  a {
    color: #0d4475;
    font-size: 18px;
    width: 40%;
    text-align: center;
    border-radius: 7px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 2% auto 8%;
    cursor: pointer;
    z-index: 10;
    border: 1px solid #0d4475;
    background-color: rgba(0, 0, 0, 0);
    transition: 1s;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 840px) {
      font-size: 16px;
    }
    @media (max-width: 620px) {
      font-size: 14px;
      height: 40px;
      margin: 2% auto;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      width: 50%;
      margin: 0 auto;
    }
  }
`;

export const ContainerTable = Home;

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 30% auto;
  p {
    color: #0d4475;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;
export const Image = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 850px) {
    width: 1000px;
  }
`;

export const ImageMobile = styled.div`
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
export const Arka = styled.img`
  margin-top: 1400px;
  width: 100%;
  @media (max-width: 1180px) {
    margin-top: 1000px;
  }
`;
export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 1384px) {
    width: 46%;
  }
  @media (max-width: 1045px) {
    width: 40%;
  }
`;

export const Text = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export const MingasLogo = styled.img`
  width: 60%;
  height: 60%;
`;

export const ContainerForTables = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  img {
    width: 100%;
    margin: 0 auto;
  }
`;

export const NameGroup = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-weight: bold;
    color: #0d4475;
    text-transform: uppercase;
    font-size: 24px;
    text-shadow: 1px 1px 1px silver, -1px 1px 1px silver;
    transition: all 0.5s;
    &:hover {
      text-shadow: -1px -1px 1px silver, 1px -1px 1px silver;
      color: #0d4475;
    }
  }
`;

export const BlockInform = styled.div`
  display: none;

  &.shake {
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    opacity: 0;
    animation: ${opacityAnimation} 2s forwards;
    iframe {
      margin: 0 auto;
      text-align: center;
    }
  }
`;
