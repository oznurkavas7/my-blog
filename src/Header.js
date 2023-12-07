import React from "react";
import { Link } from 'react-router-dom'
import {
    Button, Container
} from '@mui/material';

const Header = () => {
    return (
        <Container>
            <header>
                <div className="myButtonHeader">
                    <Link to={"/about"}><Button style={{
                        float: "right",
                        background: "#FF0080"
                    }} variant="contained">About</Button></Link>
                    <Link to={"/blog"}><Button style={{
                        marginLeft: 10,
                        float: "right",
                        background: "#A91B60",
                    }} variant="contained">Blog</Button></Link>
                </div>
            </header>
        </Container>
    )
}

export default Header;