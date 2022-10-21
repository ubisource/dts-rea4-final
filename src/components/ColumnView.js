import { Grid } from "@mui/material";
import { CardNews } from "./CardNews";

export const ColumnView = (props) => {
  return (
    <>
      <h3 className="column-view">{props.title}</h3>
      <div className="column-view-content">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
          <Grid item xs={3}>
            <CardNews />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
