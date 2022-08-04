import { useCallback, useEffect, useState } from "react";
import { BlockInform, NameGroup } from "../styles";
import { ContainerFinal, TableStyleForFinal } from "../stylesFinal";

export default function ThirdPlace() {
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
        <ContainerFinal>
          <>
            <NameGroup onClick={animate}>
              <p>Матч за 3 место</p>
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
              <img
                style={{ width: "70%" }}
                src={require("../../assets/lineOne.png")}
              />
            </NameGroup>
            {data.map((el) =>
              el.matches.map((match) => (
                <>
                  {match.final_type === "4" && (
                    <BlockInform className={isOpen && "shake"}>
                      <TableStyleForFinal>
                        <div>
                          <p>
                            Играющие команды : {match.team1_name} /{" "}
                            {match.team2_name}
                          </p>
                          <p>
                            Счёт : {match.score_team1} / {match.score_team2}
                          </p>
                          <p>Победила команда {}:</p>
                        </div>
                        <div>
                          <iframe
                            width="500"
                            height="300"
                            src={match.stream_url}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </TableStyleForFinal>
                    </BlockInform>
                  )}
                </>
              ))
            )}
          </>
        </ContainerFinal>
      )}
    </>
  );
}
