import { useState, useEffect } from "react";


export const useFetch = (url,method="GET") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending,setIsPending] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {

      setIsPending(true)
      const response = await fetch(url);

      const jsonResponse = await response.json();

      if (response.ok) {
        setData(jsonResponse);
        setError("");
        setIsPending(false)
      }

      if (!response.ok) {
        setError(jsonResponse.error);
        setIsPending(false)
      }
    };

    fetchPosts();
  }, [url]);

  return {data,error,isPending}

};
