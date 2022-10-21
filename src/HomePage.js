import { useEffect } from "react";
import axios from "axios";
import { ColumnView } from "./components/ColumnView";
import { Featured } from "./components/Featured";
import { Layout } from "./components/Layout";

const HomePage = () => {
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.nytimes.com/svc/archive/v1/2022/10.json?api-key=ansPovFcUeYL58nxnXG6JxzPxsbdAKjL`,
      dataType: "jsonp",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <Featured title="Hot Topics" />
      <ColumnView title="Lates News" />
    </Layout>
  );
};

export default HomePage;
