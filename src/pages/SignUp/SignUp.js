import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import { amber, lightBlue } from '@mui/material/colors';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import spinner from '../../images/spinner.gif'

const SignUp = () => {
    const partialBgColor = amber[300];
    const [registerData, setRegisterDataData] = useState({});
    const navigate = useNavigate();
    const { emailRegistration, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterDataData(newRegisterData);
    }

    const handleFormSubmit = e => {
        if (registerData.password !== registerData.confirmPassword) {
            alert('Your password did not match');
            return
        }
        emailRegistration(registerData.email, registerData.password, registerData.name, navigate);
        e.preventDefault();
    }

    //spinner
    if (isLoading) {
        return (
            <Box
                sx={{
                    backgroundColor: '#000',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <img style={{ margin: '0 auto' }} src={spinner} alt="" />
            </Box>
        )
    }

    return (
        <Box
            sx={{
                height: '100vh',
                background: `linear-gradient(90deg, ${partialBgColor} 50%, #FFFFFF 50%)`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>
            <Box sx={{ position: 'absolute', top: 0, right: 0, width: 150, height: 150, overflow: 'hidden' }}>
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(247.209, 100.576, 100.576, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(255, 213, 79, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient)" d="M26.9,-22.4C32.2,-14.7,32.1,-3.7,28.9,5.1C25.7,14,19.4,20.6,10.9,26C2.4,31.3,-8.3,35.4,-15.3,32C-22.4,28.6,-25.7,17.6,-28.6,6.2C-31.5,-5.3,-33.9,-17.1,-29.1,-24.6C-24.3,-32.1,-12.1,-35.3,-0.7,-34.7C10.8,-34.2,21.5,-30,26.9,-22.4Z" width="100%" height="100%" transform="translate(80 30)" strokeWidth="0" ></path>
                </svg>
            </Box>
            <Box sx={{ position: 'absolute', top: '26%', right: '29%', width: 200, height: 200 }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#9EF0F0" d="M36.1,-44C48.2,-32.9,60.4,-22.8,64.6,-9.8C68.7,3.1,64.7,19.1,58.2,36.5C51.6,54,42.5,72.8,29.4,75.1C16.3,77.4,-0.7,63.1,-17.8,54.5C-35,45.9,-52.1,43,-64.4,32.1C-76.8,21.3,-84.2,2.6,-82.5,-15.8C-80.7,-34.2,-69.8,-52.2,-54.5,-62.7C-39.2,-73.3,-19.6,-76.4,-3.8,-71.9C12,-67.4,24,-55.1,36.1,-44Z" transform="translate(100 100)" />
                </svg>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 0, right: '10%', width: 200, height: 200, overflow: 'hidden' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#A7F0BA" d="M39.5,-22.8C51.7,-1.8,62.3,20.2,55.5,34.6C48.6,49,24.3,55.9,10,50.1C-4.4,44.3,-8.7,25.9,-15.4,11.6C-22.1,-2.7,-31.1,-12.9,-28.9,-28.2C-26.8,-43.5,-13.4,-63.8,0.2,-63.9C13.7,-64,27.4,-43.9,39.5,-22.8Z" transform="translate(100 160)" />
                </svg>
            </Box>
            <Box
                sx={{
                    width: { xs: 320, lg: 600 },
                    boxShadow: 3,
                    borderRadius: 3,
                    backgroundColor: 'white',
                    zIndex: 111
                }}>
                <Box sx={{ px: { xs: 4, lg: 8 }, py: { xs: 4, lg: 6 } }} >
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 2 }}
                            name="name"
                            required
                            error={false}
                            label="Your Name"
                            variant="standard"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 2 }}
                            name="email"
                            required
                            error={false}
                            label="Your Email"
                            variant="standard"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 2 }}
                            name="password"
                            type="password"
                            required
                            error={false}
                            label="Your Password"
                            variant="standard"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 2 }}
                            name="confirmPassword"
                            type="password"
                            required
                            error={false}
                            label="Confirm Password"
                            variant="standard"
                        />
                        <Button type="submit" variant="outlined"
                            sx={{
                                width: '100%',
                                mb: 2,
                                border: '1px solid black',
                                backgroundColor: 'black',
                                color: 'white',
                                transition: 'all 0.3s ease-out',
                                '&:hover': {
                                    border: '1px solid black',
                                    backgroundColor: 'white',
                                    color: 'black',
                                }
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                    <Button variant="outlined" startIcon={<GoogleIcon />}
                        sx={{
                            width: '100%',
                            border: '1px solid black',
                            color: 'black',
                            mb: 3
                        }}
                    >
                        Continue With Google
                    </Button>
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <Typography as={Link} to={'/login'} variant="h4" component="div"
                        sx={{
                            color: lightBlue[400],
                            fontSize: 16,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease-in',
                            cursor: 'pointer',
                            '&:hover': {
                                color: lightBlue[600],
                                textDecoration: 'underline',
                            }
                        }}
                    >
                        New to Muzify? Crete Account Now.
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
};

export default SignUp;