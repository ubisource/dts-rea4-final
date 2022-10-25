import { Box, Grid, Skeleton } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { Link } from "react-router-dom";

export const Featured = ({ title, news }) => {
  let count = 0;
  return (
    <>
      <h3 className="featured">{title}</h3>
      <div className="featured-content">
        {news ? (
          <Carousel variant="dark" touch="true">
            {news.map(function (item, i) {
              if (!item.multimedia.length || count === 5) {
                return false;
              }
              count++;
              const sliceSummary = item.abstract.split(" ");
              const firstSummary = sliceSummary[0];
              sliceSummary.shift();
              const summary = sliceSummary.join(" ");
              return (
                <Carousel.Item key={i}>
                  <Grid container spacing={2}>
                    <Grid item xs={9}>
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url(${item.multimedia[0].url})`,
                        }}
                      >
                        <Link
                          to={
                            "/news/" +
                            item.url.replace("https://www.nytimes.com/", "")
                          }
                        >
                          <h3 className="title-news font-serif">
                            {" "}
                            {item.title}{" "}
                          </h3>
                        </Link>
                        <Box component="div" className="meta">
                          <span>{moment(item.published_date).fromNow()}</span>
                          <span>Nytimes</span>
                        </Box>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <p className="summary font-serif">
                        <span className="first">{firstSummary}</span> {summary}
                      </p>
                      <Link
                        to={
                          "/news/" +
                          item.url.replace("https://www.nytimes.com/", "")
                        }
                      >
                        <span className="read-more font-serif">Read more</span>
                      </Link>
                    </Grid>
                  </Grid>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Skeleton
                sx={{ height: 380 }}
                animation="wave"
                variant="rounded"
              />
            </Grid>
            <Grid item xs={3}>
              <Skeleton sx={{ height: 30 }} />
              <Skeleton sx={{ height: 30 }} width="90%" />
              <Skeleton sx={{ height: 30 }} width="80%" />
              <Skeleton sx={{ height: 30 }} />
              <Skeleton sx={{ height: 30 }} width="90%" />
              <Skeleton sx={{ height: 30 }} />
              <Skeleton sx={{ height: 30 }} width="80%" />
              <Skeleton sx={{ height: 30 }} />
              <Skeleton sx={{ height: 30 }} width="50%" />
              <Skeleton sx={{ height: 30 }} width="30%" />
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
};
