import { Grid } from "@mui/material";
import { CardNews } from "./CardNews";

export const ColumnView = ({ title, news }) => {
  return (
    <>
      <h3 className="column-view">{title}</h3>
      <div className="column-view-content">
        <Grid container spacing={2}>
          {news
            ? news.map(function (item, i) {
                return (
                  <Grid key={i} item xs={3}>
                    <CardNews news={item} />
                  </Grid>
                );
              })
            : Array(8).fill(null).map(function (item, i) {
              console.log(item);
                return (
                  <Grid key={i} item xs={3}>
                    <CardNews news={item} />
                  </Grid>
                );
              })}
        </Grid>
      </div>
    </>
  );
};
