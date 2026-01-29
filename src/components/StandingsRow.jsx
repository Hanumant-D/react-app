function FormBadge({ value }) {
  const styles = {
    W: "bg-green-600",
    L: "bg-red-600",
    A: "bg-black",
  };

  return (
    <span
      className={`w-6 h-6 flex items-center justify-center rounded text-xs text-white ${styles[value]}`}
    >
      {value}
    </span>
  );
}

export default function StandingsRow({ team }) {
  return (
    <tr className="odd:bg-white even:bg-gray-50">
      <td className="px-4 py-4 font-bold">{team.position}</td>

      <td className="px-4 py-4 flex items-center gap-3">
        {/* <img
          src={team.team.logo}
          alt={team.team.name}
          className="w-8 h-8 rounded-full"
        /> */}
        {/* <span className="font-medium">{team.team.name}</span> */}
      </td>

      <td className="px-4 py-4 text-center">{team.played}</td>
      <td className="px-4 py-4 text-center">{team.won}</td>
      <td className="px-4 py-4 text-center">{team.lost}</td>
      <td className="px-4 py-4 text-center">{team.tied}</td>
      <td className="px-4 py-4 text-center">{team.nr}</td>
      <td className="px-4 py-4 text-center">{team.nrr}</td>
      <td className="px-4 py-4 text-center font-bold">{team.points}</td>

      <td className="px-4 py-4">
        <div className="flex gap-1">
          {team.form.map((f, i) => (
            <FormBadge key={i} value={f} />
          ))}
        </div>
      </td>
    </tr>
  );
}
