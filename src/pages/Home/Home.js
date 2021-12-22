import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import bgImage from '../../images/bg-gradient.jpg'
import Footer from '../../components/Shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${bgImage})`,
            }}>
                <Navbar></Navbar>
                <Banner></Banner>
            </Box>

            <Footer></Footer>
        </>
    );
};

export default Home;