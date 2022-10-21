import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Box } from "@mui/system";

export const CardNews = () => {
  return (
    <>
      <Box component="div">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <h4 className="title-news font-serif">Judul Berita</h4>
        <Box component="div" className="meta">
          <span>1 Hour Ago</span>
          <span>Nyitimes</span>
        </Box>
      </Box>
    </>
  );
};
