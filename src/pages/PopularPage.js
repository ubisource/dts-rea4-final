import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import { ColumnViewCategories } from "../components/ColumnViewCategories";

const PopularPage = () => {
  const [mostView, setMostView] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?&api-key=7NONmCge0904Z8wEx7r8eWDsJoFlJh21`
      )
      .then((res) => {
        setMostView(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <ColumnViewCategories title="Most Popular News" news={mostView} />
    </Layout>
  );
};

export default PopularPage;
