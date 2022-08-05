import { useCallback, useEffect, useState } from "react";
import { ContainerFinal, TableStyleForFinal } from "../stylesFinal";

export default function OneSecondFinal() {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch(
      "http://tournament.mingas.by:8000/api/final/",
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
          <h2>Полуфинал</h2>
          {data.map((el) =>
            el.matches.map((match) => (
              <>
                {match.final_type === "2" && (
                  <TableStyleForFinal style={{ margin: "40% auto" }}>
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
              </>
            ))
          )}
        </ContainerFinal>
      )}
    </>
  );
}
