import {useEffect, useState} from "react";
import axios from "axios";
import {ColumnView} from "../components/ColumnView";
import {Featured} from "../components/Featured";
import {Layout} from "../components/Layout";

const HomePage = () => {
  const [headline, setHeadline] = useState();
  const [lateNews, setLateNews] = useState();

  const fetchNews = () => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ecsDKT2R98yozpsgLc0KhXIH5hk0IlCA`
      )
      .then((res) => {
        setLateNews(res.data.response.docs.slice(0, 8));
      })
      .catch((err) => console.log(err));
  }

  const fetchHeadline = () => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ecsDKT2R98yozpsgLc0KhXIH5hk0IlCA`
      )
      .then((res) => {
        setHeadline(res.data.results[0])
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchNews()
  }, []);

  useEffect(() => {
    let requestTimer = setTimeout(() => {
      fetchNews()
    }, 60 * 1000);

    return () => clearTimeout(requestTimer)
  }, [lateNews]);

  useEffect(() => {
    fetchHeadline()
  }, [])

  return (
    <Layout>
      <Featured title="Hot Topics" top={headline}/>
      <ColumnView title="Latest News" news={lateNews}/>
    </Layout>
  );
};

export default HomePage;
