import styled, { keyframes } from "styled-components";
export const opacityAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
export const GeneralContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  display: block;
  position: absolute;
  overflow-y: scroll;
  background: url(${require("../assets/chel_1.webp")}) left 70% no-repeat, url(${require("../assets/chel_3.webp")}) right 90% no-repeat;
  @media(max-width:800px ) {
    background-size: 30%;
  }
  @media(max-width:600px ) {
    background-size: 20%;
  }
  background-size: 15%;
);
`;
export const TableStyle = styled.table`
  border-spacing: 0;
  //border: 1px solid black;
  width: 94%;
  border-radius: 10px;
  margin: 4% auto;
  text-align: center;
  border: 1px solid #e5e5e5;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 12px;
  font-size: 14px;
  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 730px) {
    font-size: 10px;
  }
  @media (max-width: 600px) {
    font-size: 9px;
  }
  @media (max-width: 550px) {
    font-size: 8px;
  }
  @media (max-width: 480px) {
    font-size: 7px;
  }
  @media (max-width: 420px) {
    font-size: 6px;
  }
  @media (max-width: 360px) {
    font-size: 5px;
  }
  thead {
    tr {
      th {
        color: rgb(153, 153, 153);
        padding: 0.5rem;
        vertical-align: inherit;
        font-weight: bold;
        @media (max-width: 1000px) {
          padding: 0.2rem;
        }
        @media (max-width: 790px) {
          padding: 0;
        }
      }
    }
  }
  tbody {
    tr {
      td {
        color: #666;
        font-weight: normal;
        @media (max-width: 490px) {
          padding: 0;
        }
      }
    }
  }
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
    border-bottom: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    word-wrap: break-word;
    :last-child {
      border-right: 0;
    }
  }
  th,
  td:first-child {
    width: 3%;
  }
`;
export const Home = styled.div`
  display: flex;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //@media (max-width: 1050px) {
  //  width: 1050px;
  //}
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
  width: 60%;
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
  //margin-top: 1500px;
  width: 80%;
  margin: 40% 10% 0;
  //@media (max-width: 1200px) {
  //  margin-top: 1000px;
  //}
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
  width: 70%;
  margin: 0 auto;
`;

export const MingasLogo = styled.img`
  width: 40%;
  height: 40%;
`;

export const ContainerForTables = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  img {
    width: 80%;
    margin: 0 auto;
  }
  iframe {
    width: 90%;
    margin: 0 auto;
    height: 500px;
  }
`;

export const NameGroup = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0d4475;
  p.group-name {
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  img.arrow {
    width: 50px;
    margin-bottom: 1rem;
    @media (max-width: 600px) {
      width: 40px;
      margin-bottom: 0.6rem;
    }
  }
  //border-bottom: 1px solid #e5e5e5;
  p {
    font-weight: bold;
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
    background-size: 50%;
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
