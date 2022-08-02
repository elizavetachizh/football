import React from "react";

export const getColumns = (object) => {
  const teams = object.teams.map((team) => ({
    Header: team.name,
    accessor: team.name,
  }));
  const goals = object.teams.map((team) => ({
    Header: "Кол-во забитых:пропущенных/коэфф",
    accessor: `${team.goals}:${team.missed_goals}/${team.coeff}`,
  }));

  return [
    {
      Header: "Team Name",
      accessor: "teamName",
    },
    ...teams,
    {
      Header: "Кол-во забитых:пропущенных/коэфф",
      accessor: `goals`,
    },
    {
      Header: "Проигранные матчи",
      accessor: "lose",
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
      Header: "Количество очков",
      accessor: "score",
    },
    {
      Header: "Место",
      accessor: "place",
    },
  ];
};
