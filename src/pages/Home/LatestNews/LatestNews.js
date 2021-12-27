import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Typography }
    from '@mui/material';
import { grey, blue, lightBlue } from '@mui/material/colors';
import React from 'react';
import image1 from '../../../images/1.jpg'
import image2 from '../../../images/2.jpg'
import image3 from '../../../images/3.jpg'

const LatestNews = () => {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: grey[200] }}>
            <Container sx={{ px: { xs: 6, lg: 4 } }}>
                <Typography variant="h4" component="div" fontSize={{ lg: 20, xs: 15 }}
                    sx={{
                        color: grey[700],
                        pt: 10,
                        pb: 0.5
                    }}
                >
                    Latest News
                </Typography>
                <Typography variant="h1" component="div" fontSize={{ lg: 50, xs: 30 }}
                    sx={{
                        fontWeight: 'bold',
                        color: grey[900],
                    }}
                >
                    Music
                </Typography>
                <Divider sx={{ backgroundColor: grey[700], mt: 1.5, mb: 8 }} />
                <Box>
                    <Grid container spacing={6}>
                        <Grid item xs={12} lg={4}>
                            <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={image1}
                                />
                                <CardContent>
                                    <Typography sx={{ pb: 1.5 }} gutterBottom variant="h5" component="div">
                                        J. Cole encouraged Dr. Dre to sign Kendrick Lamar
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        J. Cole has confirmed his involvement in the 2012 signing of Kendrick Lamar to Aftermath Records, saying in a new interview that he once hyped Lamar up to the label’s founder and CEO, Dr. Dre. Dre would eventually sign Lamar.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={image2}
                                />
                                <CardContent>
                                    <Typography sx={{ pb: 1.5 }} gutterBottom variant="h5" component="div">
                                        Drake surprised Toronto residents with cash
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Drake found himself in a generous mood this Christmas, handing out stacks of cash to random people in his hometown of Toronto, Canada. One lucky recipient shared their encounter with the rapper.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={image3}
                                />
                                <CardContent>
                                    <Typography sx={{ pb: 1.5 }} gutterBottom variant="h5" component="div">
                                        Raffle for Ed Sheeran’s guitar raises over £50k
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A customised guitar that Ed Sheeran donated to a charity auction has raised £52,765 for a primary school in his hometown. The money will go towards a SMART music pod and disabled access facilities at Sir Robert Hitcham’s School.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <Typography

                        variant="h4"
                        component="div"
                        fontSize={{ lg: 20, xs: 15 }}
                        sx={{
                            color: lightBlue[700],
                            pt: 10,
                            pb: 5,
                            textAlign: 'right',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in',
                            '&:hover': {
                                color: lightBlue[400],
                            }
                        }}
                    >
                        More News
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default LatestNews;