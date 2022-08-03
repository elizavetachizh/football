import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Table } from "./table";
import {
  Container,
  ContainerTable,
  ContainerLoading,
  ContainerForTables,
  NameGroup,
  BlockInform,
} from "./styles";
import ReactLoading from "react-loading";

export default function ContainerPage() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentGroupId, setCurrentGroupId] = useState("");
  const animate = useCallback(
    (id) => {
      if (currentGroupId === id) {
        setCurrentGroupId("");
        setIsOpen(false);
        console.log(currentGroupId);
      } else {
        setCurrentGroupId(id);
        setIsOpen(true);
        console.log(currentGroupId);
      }

      console.log(currentGroupId);
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
    <Container
      // style={{
      //   background: `url(${require("../assets/chel_1.png")}) 0 34% 20% "no-repeat", url(${require("../assets/chel_2.png")}) 0 74% 20% "no-repeat"`,
      // }}
    >
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
      </ContainerTable>
    </Container>
  );
}
