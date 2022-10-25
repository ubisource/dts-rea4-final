import {Card, CardActionArea, CardMedia, Skeleton} from "@mui/material";
import {Box} from "@mui/system";
import moment from "moment";

export const CardNews = ({news}) => {
  return (
    <>
      <Box component="div">
        {news ? (
          <Card>
            <CardActionArea>
              {(news.multimedia.length) ? (
                <CardMedia
                  component="img"
                  height="150"
                  image={"https://www.nytimes.com/" + news.multimedia[0].url}
                  alt={news.headline.main}
                />
              ) : (
                <CardMedia
                  component="img"
                  height="150"
                  image={"https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg"}
                  alt={news.headline.main}
                />
              )}
            </CardActionArea>
          </Card>
        ) : (
          <Skeleton
            sx={{height: 150}}
            animation="wave"
            variant="rounded"
          />
        )}
        {news ? (
          <h4 className="title-news font-serif">{news.headline.main}</h4>
        ) : (
          <Skeleton/>
        )}
        <Box component="div" className="meta">
          {news ? (
            <>
              <span>{moment(news.pub_date).fromNow()}</span>
              <span>{news.source}</span>
            </>
          ) : (
            <Skeleton width="60%"/>
          )}
        </Box>
      </Box>
    </>
  );
};
