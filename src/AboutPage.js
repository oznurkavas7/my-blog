import { Container, IconButton, Typography, Grid, Box, Paper } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import image1 from "./1669295446262.jpeg";

const AboutPage = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <img style={{ width: 300, height: 300, borderRadius: 600 / 2, marginLeft: "50px", marginTop: "20px"}} src={image1} alt="" />
                        <div style={{ justifyContent: 'center', display: 'flex', marginRight: "50px", marginTop: '20px' }}>
                            <Link to="https://www.linkedin.com/in/%C3%B6znur-kavas-a45467116/" target="_blank" rel="noopener noreferrer" >
                                <IconButton>
                                    <LinkedInIcon />
                                </IconButton>
                            </Link>
                            <Link to="https://www.instagram.com/oznurrboztepe/?next=%2F" target="_blank" rel="noopener noreferrer" >
                                <IconButton>
                                    <InstagramIcon />
                                </IconButton>
                            </Link>
                            <Link to="https://github.com/oznurkavas7" target="_blank" rel="noopener noreferrer" >
                                <IconButton>
                                    <GitHubIcon />
                                </IconButton>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <Paper elevation={10} sx={{ backgroundColor: "#EBE0D0", padding: "16px", marginTop: "20px" }}>
                            <h2>Merhaba, Ben Öznur</h2>
                            <p>2019 yılında Süleyman Demirel Ünivesitesi Bilgisayar Mühendisliği bölümünden mezun oldum.
                                Kendimi javascript, html, css alanlarında geliştirdim.
                                Ayrıca ext.js, react.js, flutter dillerinde çalıştım. Kendimi geliştirmeye devam ediyorum.</p>
                        </Paper>
                        <Paper elevation={10} sx={{ backgroundColor: "#EBE0D0", padding: "16px", marginTop: '10px' }}>
                            <h4>Yetenekler</h4>
                            <Box sx={{ width: '100%' }}>
                                <Grid container item spacing={3} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <Stack spacing={2}>
                                            <Typography component="legend">HTML</Typography>
                                            <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly />

                                            <Typography component="legend">CSS</Typography>
                                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Stack spacing={2}>
                                            <Typography component="legend">JavaScript</Typography>
                                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />

                                            <Typography component="legend">Ext.JS</Typography>
                                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Stack spacing={2}>
                                            <Typography component="legend">React.JS</Typography>
                                            <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Stack spacing={2}>
                                            <Typography component="legend">Flutter</Typography>
                                            <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default AboutPage;
