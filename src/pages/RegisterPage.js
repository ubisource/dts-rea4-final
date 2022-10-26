import React, {useState} from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate} from "react-router-dom";
import {signingUp} from "../components/utils/firebase/signup";
import {signingIn} from "../components/utils/firebase/signin";

const RegisterPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const signUp = async () => {
    const response = await signingUp(email, password)
    if (response.message === "Firebase: Error (auth/email-already-in-use).") {
      navigate('/login')
    } else {
      localStorage.setItem('access_token', response.accessToken)
      navigate('/')
    }
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          {/*onSubmit={handleSubmit}*/}
          <Box noValidate sx={{mt: 1}}>
            <TextField margin="normal"
                       required
                       fullWidth
                       id="username"
                       label="Username"
                       name="username"
                       autoComplete="username"
                       autoFocus
                       onChange={e => setUsername(e.target.value)}
            />
            <TextField margin="normal"
                       required
                       fullWidth
                       name="email"
                       label="Email"
                       type="email"
                       id="email"
                       autoComplete="Email"
                       onChange={e => setEmail(e.target.value)}
            />
            <TextField margin="normal"
                       required
                       fullWidth
                       name="password"
                       label="Password"
                       type="password"
                       id="password"
                       autoComplete="current-password"
                       onChange={e => setPassword(e.target.value)}
            />
            <TextField margin="normal"
                       required
                       fullWidth
                       name="confirm-password"
                       label="Confirm Password"
                       type="password"
                       id="confirm-password"
                       autoComplete="confirm-password"
                       onChange={e => setConfirmPassword(e.target.value)}
            />
            <Button type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={signUp}
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                Or Sign in with:
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}>
                  Google
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}>
                  Facebook
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterPage;