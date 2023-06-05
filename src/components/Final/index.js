import React, { useCallback, useEffect, useState } from "react";
import { ContainerFinal, TableStyleForFinal } from "./stylesFinal";

export default function ContainerFinalFun({ title, finalType }) {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch(
      // "http://tournament.mingas.by:8000/api/final/",
      "http://172.17.44.114:8001/api/final/"
    );
    return await response.json();
  }, []);
  useEffect(() => {
    if (!data.length) {
      getData().then((result) => setData(result));
    }
  }, [data]);
  return (
    <ContainerFinal>
      <h3>{title}</h3>
      {data?.map((el) =>
        el.matches.map((match) => (
          <>
            {match.final_type === finalType && (
              <TableStyleForFinal>
                <div>
                  <div>
                    <p>
                      {match.team1_name} - <strong>{match.score_team1}</strong>
                    </p>
                    <p>
                      {match.team2_name} - <strong>{match.score_team2}</strong>
                    </p>
                  </div>
                  <div>
                    <p>
                      Победила команда: <br />
                    </p>
                    <p>
                      {match.is_fibished === true ? (
                        <strong> {match.winner}</strong>
                      ) : (
                        <strong>Матч не окончен</strong>
                      )}
                    </p>
                  </div>
                </div>
              </TableStyleForFinal>
            )}
          </>
        ))
      )}
    </ContainerFinal>
  );
}
