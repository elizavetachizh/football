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
                            <p>
                              {match.team1_name} - {match.score_team1}
                            </p>
                            <p>
                              {match.team2_name} - {match.score_team2}
                            </p>
                            {match.score_team1 > match.score_team2 ? (
                              <p>Победила команда {match.team1_name}</p>
                            ) : (
                              <p>Победила команда {match.team2_name}</p>
                            )}
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
