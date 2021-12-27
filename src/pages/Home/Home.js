import { Badge, Box, Icon } from '@mui/material';
import React from 'react';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import bgImage from '../../images/bg-gradient.jpg'
import Footer from '../../components/Shared/Footer/Footer';
import LatestRelease from './LatestRelease/LatestRelease';
import { grey, red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { clearPlayList } from '../../redux/slices/songSlice';
import LatestNews from './LatestNews/LatestNews';

const Home = () => {
    const myPlayList = useSelector((state) => state.songs.myPlaylist);
    const dispatch = useDispatch();
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${bgImage})`,
            }}>
                <Navbar></Navbar>
                <Banner></Banner>
            </Box>
            <Box
                sx={{
                    position: 'fixed',
                    top: '50%',
                    right: '3%',
                    backgroundColor: grey[100],
                    py: 2.25,
                    px: 1,
                    zIndex: 11,
                    borderRadius: '1.75rem',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                <Badge
                    sx={{
                        color: grey[700],
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in',
                        "&:hover": {
                            color: grey[400]
                        },
                        "& .MuiBadge-badge": {
                            color: "white",
                            background: "linear-gradient(90deg, rgba(73,167,237,1) 0%, rgba(218,60,238,0.989233193277311) 100%)"
                        }
                    }}
                    badgeContent={myPlayList.length ? myPlayList.length : '0'}>
                    <Icon sx={{ fontSize: 30 }}>library_music</Icon>
                </Badge>
                <Icon onClick={() => dispatch(clearPlayList())}
                    sx={{
                        fontSize: 30,
                        color: red[300],
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in',
                        "&:hover": {
                            color: red[400]
                        }
                    }}>
                    delete
                </Icon>
            </Box>
            <LatestRelease></LatestRelease>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </>
    );
};

export default Home;