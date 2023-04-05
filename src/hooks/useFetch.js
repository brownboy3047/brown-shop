import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const controller = new AbortController();
    let ignore = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);

        // { signal: controller.signal }

        if (!response.ok) {
          throw new Error("Data could not be fetch");
        }

        const result = await response.json();
        // setLoading(false);

        if (!ignore) {
          setData(result);
          setError(null);
        }
      } catch (error) {
        // setLoading(false);
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    //* clean up function
    // return () => controller.abort();
    return () => (ignore = true);
  }, [url]);

  return { data, error, loading };
};
