import React, { useCallback, useEffect, useState } from "react";
import { NameGroup } from "../styles";
import { ContainerThirdPlace } from "./stylesFinal";
import ContainerFinalFun from "./index";

export default function ThirdPlace() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const animate = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  const getData = useCallback(async () => {
    const response = await fetch("http://172.17.44.114:8001/api/final/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }, []);
  useEffect(() => {
    if (!data.length) {
      getData().then((result) => setData(result));
    }
  }, [data]);

  return (
    <>
      {!data.length ? (
        <></>
      ) : (
        <>
          <NameGroup onClick={animate}>
            <p>Матч за третье место</p>
            {isOpen ? (
              <img
                alt={""}
                style={{ width: "50px", marginBottom: "1rem" }}
                src={require("../../assets/strelca2.webp")}
              />
            ) : (
              <img
                alt={""}
                style={{ width: "50px", marginBottom: "1rem" }}
                src={require("../../assets/strelca.webp")}
              />
            )}
          </NameGroup>
          <ContainerThirdPlace className={isOpen && "shake"}>
            <ContainerFinalFun finalType={"0"} />
          </ContainerThirdPlace>
          <img
            alt={""}
            style={{ width: "70%" }}
            src={require("../../assets/lineOne.webp")}
          />
        </>
      )}
    </>
  );
}
