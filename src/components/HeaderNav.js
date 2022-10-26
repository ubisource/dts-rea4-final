import {
  AppBar,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import PropTypes from "prop-types";
import {alpha, Box, Container} from "@mui/system";
import logo from "../assets/logo.png";
import styled from "@emotion/styled";
import {useState} from "react";
import {Link} from "react-router-dom";

function HideOnScroll(props) {
  const {children, window} = props;
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

const Search = styled("div")(({theme}) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const HeaderNav = (props) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar elevation={0} className="nav-container">
          <Container maxWidth="lg">
            <Toolbar className="nav-bar">
              <Link to="/">
                <img src={logo} alt="News Portal" id="logo"/>
              </Link>
              <Box id="menu-container">
                <IconButton size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu">
                  <SearchRoundedIcon/>
                </IconButton>
                <IconButton size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ml: 1}}
                            onClick={toggleDrawer("right", true)}>
                  <MenuRoundedIcon/>
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}>
        <Box sx={{width: 250}}
             role="presentation"
             onClick={toggleDrawer("right", false)}
             onKeyDown={toggleDrawer("right", false)}>
          <List>
            <Link to="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeRoundedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Home"/>
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/news">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <NewspaperRoundedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Latest News"/>
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/popular">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StarRoundedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Popular"/>
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/movie">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MovieCreationRoundedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Movie Review"/>
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
