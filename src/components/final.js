import { Container, TableStyle } from "./styles";
import { ContainerFinal } from "./stylesFinal";
import { useCallback, useEffect, useState } from "react";

export default function Final() {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch("http://172.16.192.11:8000/api/groups/", {
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
    <Container>
      <ContainerFinal>
        <TableStyle>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dxtgjhfghj</td>
              <td>dxtgjhfghj</td>
              <td>dxtgjhfghj</td>
              <td>dxtgjhfghj</td>
            </tr>
            <tr>
              <td>rdytutfdu</td>
              <td>dxtgjhfghj</td>
              <td>dxtgjhfghj</td>
              <td>dxtgjhfghj</td>
            </tr>

            <tr>
              <td>dhdfth</td>
              <td>dxtgjhfghj</td>
            </tr>
            <tr>
              <td>dxtgjhfghj</td>
            </tr>
            <tr>
              <td>rdytutfdu</td>
            </tr>

            <tr>
              <td>dhdfth</td>
            </tr>
            <tr>
              <td>dxtgjhfghj</td>
            </tr>
            <tr>
              <td>rdytutfdu</td>
            </tr>
          </tbody>
        </TableStyle>
      </ContainerFinal>
    </Container>
  );
}
