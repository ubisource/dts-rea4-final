import React from 'react';
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

const RegisterPage = () => {
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
                    <Box component="form" noValidate sx={{mt: 1}}>
                        <TextField margin="normal"
                                   required
                                   fullWidth
                                   id="username"
                                   label="Username"
                                   name="username"
                                   autoComplete="username"
                                   autoFocus/>
                        <TextField margin="normal"
                                   required
                                   fullWidth
                                   name="email"
                                   label="Email"
                                   type="email"
                                   id="email"
                                   autoComplete="Email"/>
                        <TextField margin="normal"
                                   required
                                   fullWidth
                                   name="password"
                                   label="Password"
                                   type="password"
                                   id="password"
                                   autoComplete="current-password"/>
                        <TextField margin="normal"
                                   required
                                   fullWidth
                                   name="confirm-password"
                                   label="Confirm Password"
                                   type="password"
                                   id="confirm-password"
                                   autoComplete="confirm-password"/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
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
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Google
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Facebook
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="#" variant="body2">
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