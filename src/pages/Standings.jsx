import { useEffect, useState } from "react";
import api from "../lib/axios";
import StandingsTable from "../components/StandingsTable";

export default function Standings() {
  const [teams, setTeams] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/cricket/v1/series/standing", {
        params: {
          series_id: 13146,
          lang: "en",
          feed_format: "json",
          client_id: 'fe6871d5b7f9',
        },
      })
    .then((response) => {
      const teams =
        response.data?.data?.standings?.stage1?.groups?.[0]?.team;

      setTeams(teams);
    })
    .catch((err) => {
      console.error("API ERROR 👉", err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []
);


  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
    // const teams = data.standings.groups[0].teams;

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <StandingsTable teams={teams} />
    </div>
  );
}
