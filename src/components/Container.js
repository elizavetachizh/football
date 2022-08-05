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
import SecondVersion from "./Final/secondМersion";

export default function ContainerPage() {
  const [data, setData] = useState([]);
  const [stream, setStream] = useState([]);
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
    const response = await fetch(
      "http://tournament.mingas.by/api/groups/",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  }, []);
  const getStream = useCallback(async () => {
    const response = await fetch(
      "http://tournament.mingas.by:8000/api/stream/"
    );
    return await response.json();
  }, []);
  useEffect(() => {
    if (!data.length) {
      getData().then((result) => setData(result));
      getStream().then((resultStream) => setStream(resultStream));
    }
  }, [data]);
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
              <img src={require("../assets/headerTables.png")} alt={""} />
              {stream.map((el) => (
                <iframe
                  src={el.stream_url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ))}
              <>
                <SecondVersion />
                <ThirdPlace />
                {data.map((el) => (
                  <>
                    <NameGroup onClick={() => animate(el.id)}>
                      <p>Группа: {el.name}</p>
                      {isOpen && currentGroupId === el.id ? (
                        <img alt={''}
                          style={{ width: "50px", marginBottom: "1rem" }}
                          src={require("../assets/strelca2.png")}
                        />
                      ) : (
                        <img alt={''}
                          style={{ width: "50px", marginBottom: "1rem" }}
                          src={require("../assets/strelca.png")}
                        />
                      )}
                    </NameGroup>
                    <BlockInform
                      className={isOpen && currentGroupId === el.id && "shake"}
                    >
                      <Table key={el.id} object={el} />
                    </BlockInform>
                    <img alt={''}
                      style={{ width: "70%" }}
                      src={require("../assets/lineOne.png")}
                    />
                  </>
                ))}
              </>
            </ContainerForTables>
          </ContainerTable>
          <div>
            <img alt={''}
              style={{ width: "100px" }}
              src={require("../assets/logo.png")}
            />
          </div>
        </Container>
      )}
    </>
  );
}
