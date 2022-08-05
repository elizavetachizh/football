import React from "react";

export const getColumns = (object) => {
  const teams = object.teams.map((team) => ({
    Header: team.name,
    accessor: team.name,
  }));

  return [
    {
      Header: "Название команды",
      accessor: "teamName",
    },
    ...teams,
    {
      Header: "Кол-во забитых : пропущенных / разница",
      accessor: `goals`,
    },
    {
      Header: "Выигранные матчи",
      accessor: "win",
    },
    {
      Header: "Матчи вничью",
      accessor: "draw",
    },
    {
      Header: "Проигранные матчи",
      accessor: "lose",
    },
    {
      Header: "Количество очков",
      accessor: "score",
    },
    {
      Header: "Место",
      accessor: "place",
    },
  ];
};
