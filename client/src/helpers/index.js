const API_URL =
  "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=French%20Ligue%201";

const fetchLeagueTeams = async () => {
  const result = await fetch(API_URL, {}).then((response) => response.json());

  result.teams.forEach((team) => console.log(team.strTeam));
};

const random_team = Math.floor(Math.random() * 20);

console.log(random_team);
