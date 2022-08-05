import { useCallback, useEffect, useState } from "react";
import { BlockInform, NameGroup } from "../styles";
import {
  ContainerFinal,
  ContainerThirdPlace,
  TableStyleForFinal,
} from "../stylesFinal";

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
        <>
          <NameGroup onClick={animate}>
            <p>Матч за третье место</p>
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
          <ContainerThirdPlace className={isOpen && "shake"}>
            {data.map((el) =>
              !el.matches.length ? (
                <>Данный матч еще не прошёл...</>
              ) : (
                <>
                  {el.matches.map((match) => (
                    <ContainerFinal>
                      {match.final_type === "0" && (
                        <TableStyleForFinal>
                          <div>
                            <div>
                              <p>
                                {match.team1_name} -{" "}<strong>{match.score_team1}</strong>
                              </p>
                              <p>
                                {match.team2_name} -{" "}<strong>{match.score_team2}</strong>
                              </p>
                            </div>
                            <div>
                              {match.score_team1 > match.score_team2 ? (
                                <>
                                  <p>
                                    Победила команда: <br />
                                  </p>
                                  <p>
                                    <strong>{match.team1_name}</strong>
                                  </p>
                                </>
                              ) : (
                                <>
                                  <p>
                                    Победила команда: <br />
                                  </p>
                                  <p>
                                    <strong>{match.team2_name}</strong>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        </TableStyleForFinal>
                      )}
                    </ContainerFinal>
                  ))}
                </>
              )
            )}
          </ContainerThirdPlace>
          <img
            style={{ width: "70%" }}
            src={require("../../assets/lineOne.png")}
          />
        </>
      )}
    </>
  );
}
