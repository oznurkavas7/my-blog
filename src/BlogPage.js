import { Container, Grid, Button, Typography, CardMedia, CardContent, CardActions, Paper } from "@mui/material";
import React, { } from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import image2 from "./News-Image-3.jpg";

const BlogPage = () => {
    const { blogData } = useContext(GlobalContext);

    return (
        <Container>
            <div>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={2}>
                            {blogData?.posts?.map((item) => (
                                <Grid key={item.ID} item>
                                    <Paper elevation={10} sx={{background: "#EBE0D0", maxWidth: 345, height: "100%", marginTop:"20px" }}>
                                        <CardMedia
                                            component="img"
                                            alt=""
                                            height="140"
                                            image={item.featured_image ? item.featured_image : image2}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.excerpt.replace(/[^a-zA-Z ]/g, "")}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link to={"/blogmore/" + item.ID} params={{ id: item.ID }}>
                                                <div className='align-right'>
                                                    <Button style={{
                                                        background: "#EC8FD0"
                                                    }} size="small" variant="contained">Read More</Button>
                                                </div>
                                            </Link>
                                        </CardActions>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default BlogPage;
