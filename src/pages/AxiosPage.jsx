import { useEffect, useState } from "react";
import api from "../lib/axios";

function AxiosPage() {
  const [data, setData] = useState(null);
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
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {
        setError("Failed to load data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {data.series.name}
      </h1>

      <p className="mt-2 text-gray-400">
        Series ID: {data.series.id}
      </p>
    </div>
  );
}

export default AxiosPage;
