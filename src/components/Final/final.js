import { useCallback, useEffect, useState } from "react";
import { ContainerFinal, TableStyleForFinal } from "../stylesFinal";

export default function Final() {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch("http://tournament.mingas.by:8000/api/final/");
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
        <>Нет финала</>
      ) : (
        <ContainerFinal>
          <h2>Финал</h2>
          {data.map((el) =>
            el.matches.map((match) => (
              <>
                {match.final_type === "1" && (
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
                        {match.is_finished === true && (
                          <>
                            <p>
                              Победила команда: <br />
                            </p>
                            <p>
                              <strong> {match.winner}</strong>
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
