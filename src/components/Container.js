import React, { useCallback, useEffect, useState } from "react";
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
import ThirdPlace from "./Final/thirdPlace";
import Final from "./Final/Final";

export default function ContainerPage() {
  const [data, setData] = useState([]);
  const [stream, setStream] = useState([]);
  const [currentGroupId, setCurrentGroupId] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch("http://172.17.44.114:8001/api/groups/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }, []);
  const getStream = useCallback(async () => {
    const response = await fetch("http://172.17.44.114:8001/api/stream/");
    return await response.json();
  }, []);
  useEffect(() => {
    if (!data.length) {
      getData().then((result) => setData(result));
      getStream().then((resultStream) => setStream(resultStream));
    }
  }, [data]);
  const animate = useCallback(
    (id) => {
      [currentGroupId]?.forEach((el) => {
        if (el !== id) {
          setCurrentGroupId([...new Set([...currentGroupId, id])]);
        }
      });
      currentGroupId?.forEach((el) => {
        if (el === id) {
          setCurrentGroupId(
            currentGroupId.filter((el) => el.toString() !== id)
          );
        }
      });
    },
    [currentGroupId]
  );
  return (
    <>
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
        <Container>
          <ContainerTable>
            <ContainerForTables>
              <div>
                <img
                  alt={""}
                  style={{ width: "20%" }}
                  src={require("../assets/logo.webp")}
                />
              </div>
              <img src={require("../assets/headerTables.webp")} alt={""} />
              <>
                <Final />
                <ThirdPlace />
                {data.map((el) => (
                  <>
                    <NameGroup
                      className={currentGroupId.includes(el.id) && "border"}
                      onClick={() => animate(el.id)}
                    >
                      <p className={"group-name"}>Группа: {el.name}</p>
                      {currentGroupId.includes(el.id) ? (
                        <img
                          alt={""}
                          className={"arrow"}
                          src={require("../assets/strelca2.webp")}
                        />
                      ) : (
                        <img
                          alt={""}
                          className={"arrow"}
                          src={require("../assets/strelca.webp")}
                        />
                      )}
                    </NameGroup>
                    <BlockInform
                      className={currentGroupId.includes(el.id) && "shake"}
                    >
                      <Table key={el.id} object={el} />
                      <iframe
                        style={{ margin: "0 auto 1rem" }}
                        src={el.stream_url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </BlockInform>
                    <img
                      alt={""}
                      style={{ width: "70%" }}
                      src={require("../assets/lineOne.webp")}
                    />
                  </>
                ))}
              </>
            </ContainerForTables>
          </ContainerTable>
        </Container>
      )}
    </>
  );
}
