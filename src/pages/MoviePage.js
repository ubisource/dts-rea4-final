import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import { ColumnViewMovie } from "../components/ColumnViewMovie";

const MoviePage = () => {
  const [mostView, setMostView] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=7NONmCge0904Z8wEx7r8eWDsJoFlJh21`
      )
      .then((res) => {
        setMostView(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <ColumnViewMovie title="Movie Review" news={mostView} />
    </Layout>
  );
};

export default MoviePage;
