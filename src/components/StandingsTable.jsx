import StandingsRow from "./StandingsRow.jsx";
export default function StandingsTable({ teams }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gradient-to-r from-blue-800 to-blue-900 text-white text-sm">
              <th className="px-4 py-4 text-left">POS</th>
              <th className="px-4 py-4 text-left">TEAM</th>
              <th className="px-4 py-4 text-center">PLAYED</th>
              <th className="px-4 py-4 text-center">WON</th>
              <th className="px-4 py-4 text-center">LOST</th>
              <th className="px-4 py-4 text-center">TIED</th>
              <th className="px-4 py-4 text-center">N/R</th>
              <th className="px-4 py-4 text-center">NRR</th>
              <th className="px-4 py-4 text-center">PTS</th>
              <th className="px-4 py-4 text-center">FORM</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(teams) &&
              teams.map((team) => (
                <tr key={team.id} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-4 text-center text-black">{team.pos}</td>
                  <td className="px-4 py-4 text-center text-black">{team.name}</td>
                  <td className="px-4 py-4 text-center text-black">{team.p}</td>
                  <td className="px-4 py-4 text-center text-black">{team.w}</td>
                  <td className="px-4 py-4 text-center text-black">{team.l}</td>
                  <td className="px-4 py-4 text-center text-black">{team.t}</td>
                  <td className="px-4 py-4 text-center text-black">{team.nr}</td>
                  <td className="px-4 py-4 text-center text-black">{team.nrr}</td>
                  <td className="px-4 py-4 text-center text-black">{team.pts}</td>

                  {/* <td>
                    {team.matches?.slice(-5).map((m, i) => (
                      <span key={i} className={`form ${m.outcome} px-2 py-1 rounded text-xs font-medium bg-blue-500 text-white mx-1`}>
                        {m.outcome}
                      </span>
                    ))}
                  </td> */}

                  <td className="px-4 py-4">
  <div className="flex justify-center gap-1">
    {team.matches.slice(-5).map((f, i) => (
      <span
        key={i}
        className={`w-7 h-7 flex items-center justify-center rounded text-xs font-bold text-white
          ${
            f === "W"
              ? "bg-green-600"
              : f === "L"
              ? "bg-red-600"
              : "bg-black"
          }`}
      >
        {f.outcome}
      </span>
    ))}
  </div>
</td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
