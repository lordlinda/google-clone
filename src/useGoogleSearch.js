import { useState, useEffect } from "react";

const CONTEXT_KEY = "9a3bee0c3a5476070";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyAeHhE-7sHSStPz57fDY9ftzdM3kRa62po&cx=${CONTEXT_KEY}&q=${term}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
