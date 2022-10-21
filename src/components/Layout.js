import { Container } from "@mui/material";
import { Footer } from "./Footer";
import { HeaderNav } from "./HeaderNav";

export const Layout = (props) => {
  return (
    <>
      <div id="page-container">
        <HeaderNav />
        <Container maxWidth="lg" id="content-wrapper">
          {props.children}
        </Container>
        <Footer />
      </div>
    </>
  );
};
