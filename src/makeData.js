const getScore = (team1, team2, matches) => {
  const currentMatch = matches.find(
    (match) =>
      (match.team1_name === team1 && match.team2_name === team2) ||
      (match.team1_name === team2 && match.team2_name === team1)
  );

  const score_team1 = currentMatch?.score_team1;
  const score_team2 = currentMatch?.score_team2;
  const score =
    currentMatch.team1_name === team1
      ? `${score_team1} / ${score_team2}`
      : `${score_team2} / ${score_team1}`;

  return (!score_team1 && score_team1 !== 0) ||
    (!score_team2 && score_team2 !== 0)
    ? "-"
    : score;
};

export const getTableData = (object) => {
  const matches = object.matches;
  const teams = object.teams.map((team) => team.name);

  return object.teams.map((team) => {
    const matchesResults = teams.map((teamName) => {
      return {
        [teamName]:
          team.name === teamName ? "-" : getScore(team.name, teamName, matches),
      };
    });
    const results = matchesResults.reduce((acc, matchResult) => {
      Object.entries(matchResult).map(([key, value]) => (acc[key] = value));

      return acc;
    }, {});
    return {
      teamName: team.name,
      ...results,
      goals: `${team.goals}:${team.missed_goals}/${team.coeff}`,
      lose: team.loss_count,
      win: team.win_count,
      draw: team.draw_count,
      score: team.score,
      place: team.place,
    };
  });
};
