import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/Layout";
import { Box } from "@mui/material";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
        <LoginPage/>
        <RegisterPage/>
      <Layout>
        <Box sx={{ my: 2 }}>
          {[...new Array(40)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Layout>
    </>
  );
}

export default App;
