import { useEffect, useState } from "react";
import axios from "axios";
import { ColumnView } from "./components/ColumnView";
import { Featured } from "./components/Featured";
import { Layout } from "./components/Layout";

const HomePage = () => {
  const [lateNews, setLateNews] = useState();
  useEffect(() => {
    // axios
    //   .get(
    //     // `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ansPovFcUeYL58nxnXG6JxzPxsbdAKjL`
    //     // `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ansPovFcUeYL58nxnXG6JxzPxsbdAKjL`
    //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=7NONmCge0904Z8wEx7r8eWDsJoFlJh21&sort=newest`
    //   )
    //   .then((res) => {
    //     setLateNews(res.data.response.docs.slice(0, 8));
    //   })
    //   .catch((err) => console.log(err));
  }, [lateNews]);
  return (
    <Layout>
      <Featured title="Hot Topics" />
      <ColumnView title="Lates News" news={lateNews}/>
    </Layout>
  );
};

export default HomePage;
