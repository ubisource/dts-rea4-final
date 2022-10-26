import {useEffect, useState} from "react";
import axios from "axios";
import {Layout} from "../components/Layout";
import {useParams} from "react-router-dom";
import {Box, Skeleton} from "@mui/material";
import moment from "moment";

const NewsDetailPage = () => {
  const params = useParams();
  const date = params.tahun + params.bulan + params.tanggal;
  const kategoripath = params["*"];
  const [theNews, setTheNews] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${kategoripath}&sort=relevance&api-key=7NONmCge0904Z8wEx7r8eWDsJoFlJh21`
        // `https://api.nytimes.com/svc/news/v3/content.json?url=${url}&api-key=7NONmCge0904Z8wEx7r8eWDsJoFlJh21`
      )
      .then((res) => {
        setTheNews(res.data.response.docs[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <div id="news-wrapper">
        {theNews ? (
          <>
            {theNews.multimedia?.length ? (
              <img
                src={"https://www.nytimes.com/" + theNews.multimedia[0].url.replace('articleLarge', 'superJumbo')}
                alt={theNews.headline.main}
                className="news-image"
              />
            ) : (
              ""
            )}

            <h2 className="font-serif news-title">{theNews.headline.main}</h2>
            <Box component="div" className="meta">
              <span>{moment(theNews.pub_date).fromNow()}</span>
              <span>{theNews.source}</span>
            </Box>
            <div className="artikel">{theNews.lead_paragraph}</div>
          </>
        ) : (
          <>
            <Skeleton sx={{height: 500}} animation="wave" variant="rounded"/>
            <Skeleton sx={{height: 40, mb: -1}} width="95%"/>
            <Skeleton sx={{height: 40}} width="60%"/>
            <Skeleton sx={{height: 20}} width="20%"/>
            <Skeleton sx={{height: 30}}/>
            <Skeleton sx={{height: 30}}/>
            <Skeleton sx={{height: 30}}/>
            <Skeleton sx={{height: 30}} width="90%"/>
            <Skeleton sx={{height: 30}} width="70%"/>
            <Skeleton sx={{height: 30}} width="20%"/>
          </>
        )}
      </div>
    </Layout>
  );
};

export default NewsDetailPage;
