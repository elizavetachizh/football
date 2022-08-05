import Final from "./final";
import OneSecondFinal from "./OneSecondFinal";
import Quarterfinal from "./quarterfinal";
import { useCallback, useEffect, useState } from "react";
import { NameGroup } from "../styles";
import { ContainerForBlocksFinal } from "../stylesFinal";

export default function SecondVersion() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const animate = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  const getData = useCallback(async () => {
    const response = await fetch("http://172.16.192.11:8000/api/final/", {
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
            <p>Финал</p>
            {isOpen ? (
              <img
                style={{ width: "50px", marginBottom: "1rem" }}
                src={require("../../assets/strelca2.png")}
              />
            ) : (
              <img
                style={{ width: "50px", marginBottom: "1rem" }}
                src={require("../../assets/strelca.png")}
              />
            )}

          </NameGroup>
          <ContainerForBlocksFinal className={isOpen && "shake"}>
            <Quarterfinal />
            <OneSecondFinal />
            <Final />
          </ContainerForBlocksFinal>
          <img
              style={{ width: "70%" }}
              src={require("../../assets/lineOne.png")}
          />
        </>
      )}
    </>
  );
}
