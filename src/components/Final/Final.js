import React, { useCallback, useEffect, useState } from "react";
import { NameGroup } from "../styles";
import { ContainerForBlocksFinal } from "./stylesFinal";
import ContainerFinal from "./index";
import ContainerFinalFun from "./index";

export default function Final() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const animate = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  const getData = useCallback(async () => {
    const response = await fetch("http://172.17.44.114:8001/api/final/");
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
            <p>Финал</p>
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
          <ContainerForBlocksFinal className={isOpen && "shake"}>
            <ContainerFinalFun finalType={"3"} title={"Четверть финала"} />
            <ContainerFinal title={"Полуфинал"} finalType={"2"} />
            <ContainerFinal title={"Финал"} finalType={"1"} />
          </ContainerForBlocksFinal>
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
