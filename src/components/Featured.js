import {Box, Grid} from "@mui/material";

export const Featured = ({title, top}) => {
  console.log(top)
  return (
    <>
      <h3 className="featured">{title}</h3>
      <div className="featured-content">
        <Grid container spacing={2}>
          {top ? (
            <>
              <Grid item xs={9}>
                <div
                  className="image"
                  style={{
                    backgroundImage: top.multimedia[0].url,
                  }}
                >
                  <h3 className="title-news font-serif">
                    {top.title}
                  </h3>
                  <Box component="div" className="meta">
                    <span>ago ago</span>
                    <span>Nyitims</span>
                  </Box>
                </div>
              </Grid>

              <Grid item xs={3}>
                <p className="summary font-serif">
                  <span className="first">Lorem</span> {top.multimedia[0].url}
                </p>
                <a href="/detail/1">
                  <span className="read-more font-serif">Read more</span>
                </a>
              </Grid>
            </>
          ) : (
            <>

            </>
          )}
        </Grid>
      </div>
    </>
  );
};
