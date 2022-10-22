import { Box, Grid } from "@mui/material";

export const Featured = ({ title }) => {
  return (
    <>
      <h3 className="featured">{title}</h3>
      <div className="featured-content">
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <div
              className="image"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg)`,
              }}
            >
              <h3 className="title-news font-serif">
                tfgifujh osfih alsoiuf hlasod fialosiu fhalsiugfalisugfl asudfgh
                fiuh lfhblofih vblfihbvl fihvl fhvlf hblgfjh bitle
              </h3>
              <Box component="div" className="meta">
                <span>ago ago</span>
                <span>Nyitims</span>
              </Box>
            </div>
          </Grid>
          <Grid item xs={3}>
            <p className="summary font-serif">
              <span className="first">fiugs</span> fiuhgslfo ujhslfiugvhlsif
              vlsi ufvaiugfvl siugfv kisgkv fihgfskhv ckashgvkc aiusgkfhfas
              kejhfvkisa kfiguhl fghvlsfjvg saig fksigf lihv fliug sug lsiug
              fcksiug lvsug v gkis gkg ksiug is clgius kiusg kviu sgkviug skiugf
              ekiuvg eg kiuegfkisu vloi sov isliuvg ksigf vsiu glciusg kviugs
              lviugslv isu vglouge k,vgs viugsloe vglsiuvgesiuvgke siug
              lviagsfkvisgflvi gfsvj agslvfkjbs vsl fiv kfsv kfivkfj vkjv
            </p>
            <span className="read-more font-serif">Read more</span>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
