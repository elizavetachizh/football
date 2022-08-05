import { useCallback, useEffect, useState } from "react";
import { ContainerFinal, TableStyleForFinal } from "../stylesFinal";

export default function Quarterfinal() {
  const [data, setData] = useState([]);
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
          {data.map((el) =>
            !el.matches.length ? (
              <>Данный матч еще не прошел...</>
            ) : (
              <>
                <p> Четверть финала</p>
                {el.matches.map((match) => (
                  <>
                    {match.final_type === "3" && (
                      <TableStyleForFinal style={{ margin: "8% auto" }}>
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
                  </>
                ))}
              </>
            )
          )}
        </ContainerFinal>
      )}
    </>
  );
}
