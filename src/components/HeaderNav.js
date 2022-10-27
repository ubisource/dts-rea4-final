import {
  AppBar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  IconButton,
  Input,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import LockIcon from "@mui/icons-material/Lock";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/system";
import logo from "../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export const HeaderNav = (props) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [search, setSearch] = useState("");
  const [theNews, setTheNews] = useState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setTheNews();
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (search) {
        axios
          .get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&sort=relevance&api-key=7NONmCge0904Z8wEx7r8eWDsJoFlJh21`
            // `https://api.nytimes.com/svc/news/v3/content.json?url=${url}&api-key=7NONmCge0904Z8wEx7r8eWDsJoFlJh21`
          )
          .then((res) => {
            let news = [];
            res.data.response.docs.map(function (item, i) {
              if (item.multimedia.length) {
                news.push(item)
              }
            });
            setTheNews(news);
          })
          .catch((err) => console.log(err));
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar elevation={0} className="nav-container">
          <Container maxWidth="lg">
            <Toolbar className="nav-bar">
              <Link to="/">
                <img src={logo} alt="News Portal" id="logo" />
              </Link>
              <Box id="menu-container">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleClickOpen("paper")}
                >
                  <SearchRoundedIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ ml: 1 }}
                  onClick={toggleDrawer("right", true)}
                >
                  <MenuRoundedIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <List>
            <Link to="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/news">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <NewspaperRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Latest News" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/popular">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StarRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Popular" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/movie">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MovieCreationRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Movie Review" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/login">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Placeholder"
            className="input-search"
            onKeyUp={(e) => setSearch(e.target.value)}
          />
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <div id="scroll-dialog-description" tabIndex={-1}>
            {theNews && theNews?.length ? (
              theNews.map(function (item, i) {
                return (
                  <Link
                    key={i}
                    to={
                      "/news/" +
                      item.web_url.replace("https://www.nytimes.com/", "")
                    }
                  >
                    <Card sx={{ display: "flex", marginBottom: "15px" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: "40%", height: 200 }}
                        image={
                          "https://www.nytimes.com/" + item.multimedia[0].url
                        }
                        alt={item.headline.main}
                      />
                      <CardActionArea>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography
                              component="div"
                              variant="h5"
                              className="font-serif"
                            >
                              {item.headline.main}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                            >
                              {item.abstract}
                            </Typography>
                          </CardContent>
                        </Box>
                      </CardActionArea>
                    </Card>
                  </Link>
                );
              })
            ) : (
              <div className="no-content">
                <SearchRoundedIcon />
                <p>No Content</p>
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <img src={logo} alt="News Portal" id="copy-logo" />
        </DialogActions>
      </Dialog>
    </>
  );
};
