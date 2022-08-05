import { useCallback, useEffect, useState } from "react";
import { NameGroup } from "../styles";
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
    const response = await fetch("http://tournament.mingas.by:8000/api/final/", {
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
                src={require("../../assets/strelca2.png")}
              />
            ) : (
              <img
                alt={""}
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
                                {match.team1_name} -{" "}
                                <strong>{match.score_team1}</strong>
                              </p>
                              <p>
                                {match.team2_name} -{" "}
                                <strong>{match.score_team2}</strong>
                              </p>
                            </div>
                            <div>
                              {match.is_finished === true ? (
                                <>
                                  <p>
                                    Победила команда: <br />
                                  </p>
                                  <p>
                                    <strong> {match.winner}</strong>
                                  </p>
                                </>
                              ) : (
                                <p>Матч не завершился</p>
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
            alt={""}
            style={{ width: "70%" }}
            src={require("../../assets/lineOne.png")}
          />
        </>
      )}
    </>
  );
}
