import { useCallback, useEffect, useState } from "react";
import { BlockInform, NameGroup } from "../styles";
import { ContainerFinal, TableStyleForFinal } from "../stylesFinal";

export default function OneSecondFinal() {
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
          Полуфинал
          {data.map((el) =>
            el.matches.map((match) => (
              <>
                {match.final_type === "2" && (
                  <TableStyleForFinal style={{ margin: "40% auto" }}>
                      <div>
                        <p>
                          {match.team1_name} - {match.score_team1}
                        </p>
                        <p>
                          {match.team2_name} - {match.score_team2}
                        </p>
                        {match.score_team1>match.score_team2 ?   <p>Победила команда {match.team1_name}</p> :   <p>Победила команда {match.team2_name}</p>}
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
