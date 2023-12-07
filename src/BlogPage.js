import { Container, List, ListItemText, ListItem, Divider } from "@mui/material";
import React, { } from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import {  GlobalContext } from "./GlobalState";

const BlogPage = () => {
    const { blogData } = useContext(GlobalContext);

    return (
        <Container>
            <div>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Blog</h2>
                {blogData?.posts?.map((item) => (
                    <List key={item.ID}>
                        {item.featured_image ? (
                            <img
                                height={250}
                                alt="article header"
                                src={item.featured_image}
                            />
                        ) : ("")}
                        <ListItem disablePadding>
                            <ListItemText primary={item.title} secondary={item.excerpt.replace(/[^a-zA-Z ]/g, "")} />
                        </ListItem>
                        <Link to={"/blogmore/" + item.ID} params={{id: item.ID}}>
                            <button className="btn">Read More</button>
                        </Link>
                        <Divider></Divider>

                    </List>
                ))}
            </div>
        </Container>
    );
}

export default BlogPage;
