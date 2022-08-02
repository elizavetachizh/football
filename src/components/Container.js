import React, { useCallback, useEffect, useState } from "react";
import { Table } from "./table";
import { Container } from "./styles";

export default function ContainerPage() {
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
  console.log(data);
  useEffect(() => {
      getData().then((result) => setData(result));
    console.log(data);
  }, []);
  console.log(data)
  return (
    <Container>
      {!data.length ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.map((el) => (
            <>
              <h2>Группа: {el.name}</h2>
              {/*<img src={require()}/>*/}
              <iframe
                width="560"
                height="315"
                src={el.stream_url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Table object={el} />
            </>
          ))}
        </>
      )}
    </Container>
  );
}
