import { Grid } from "@mui/material";
import { CardNews } from "./CardNews";

export const ColumnViewAlt = ({ title, news }) => {
  let count = 0;
  return (
    <>
      <h3 className="column-view">{title}</h3>
      <div className="column-view-content">
        <Grid container spacing={2}>
          {news
            ? news.map(function (item, i) {
                if ((!item.multimedia.length)||(count === 9)) {
                  return false;
                }
                count++;
                return (
                  <Grid key={i} item xs={4}>
                    <CardNews news={item} imgheight="250"/>
                  </Grid>
                );
              })
            : Array(9)
                .fill(null)
                .map(function (item, i) {
                  return (
                    <Grid key={i} item xs={4}>
                      <CardNews news={item} imgheight="250"/>
                    </Grid>
                  );
                })}
        </Grid>
      </div>
    </>
  );
};
