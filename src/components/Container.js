import React, { useCallback, useEffect, useState } from "react";
import { Table } from "./table";
import {
  Container,
  ContainerTable,
  ContainerLoading,
  ContainerForTables,
  NameGroup,
  BlockInform,
  BlockFinal,
} from "./styles";
import ReactLoading from "react-loading";
import Quarterfinal from "./Final/quarterfinal";
import OneSecondFinal from "./Final/OneSecondFinal";
import Final from "./Final/final";
import ThirdPlace from "./Final/thirdPlace";

export default function ContainerPage() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentGroupId, setCurrentGroupId] = useState("");
  const animate = useCallback(
    (id) => {
      if (currentGroupId === id) {
        setCurrentGroupId("");
        setIsOpen(false);
      } else {
        setCurrentGroupId(id);
        setIsOpen(true);
      }
    },
    [isOpen, currentGroupId]
  );

  const getData = useCallback(async () => {
    const response = await fetch("http://172.16.192.11:8000/api/groups/", {
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
    <Container>
      <ContainerTable>
        {!data.length ? (
          <ContainerLoading>
            <ReactLoading
              type={"spinningBubbles"}
              color={"#0d4475"}
              className="loading"
            />
            <p>Идёт загрузка данных, пожалуйста, подождите...</p>
          </ContainerLoading>
        ) : (
          <ContainerForTables>
            <img src={require("../assets/headerTables.png")} alt={""} />
            <>
              {data.map((el) => (
                <>
                  <NameGroup onClick={() => animate(el.id)}>
                    <p>Группа: {el.name}</p>
                    {isOpen && currentGroupId === el.id ? (
                      <img
                        style={{ width: "50px", marginBottom: "1rem" }}
                        src={require("../assets/strelca2.png")}
                      />
                    ) : (
                      <img
                        style={{ width: "50px", marginBottom: "1rem" }}
                        src={require("../assets/strelca.png")}
                      />
                    )}
                    <img
                      style={{ width: "70%" }}
                      src={require("../assets/lineOne.png")}
                    />
                  </NameGroup>
                  <BlockInform
                    className={isOpen && currentGroupId === el.id && "shake"}
                  >
                    <iframe
                      width="560"
                      height="315"
                      src={el.stream_url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <Table key={el.id} object={el} />
                  </BlockInform>
                </>
              ))}
            </>
          </ContainerForTables>
        )}
        <Quarterfinal />
        <OneSecondFinal />
        <ThirdPlace />
        <Final />
      </ContainerTable>
    </Container>
  );
}
