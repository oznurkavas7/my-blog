import { Container } from "@mui/material";
import React, { } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogMorePage = () => {
    let { id } = useParams();

    const [blogMoreData, setBlogMoreData] = useState([]);

    const getMoreData = async () => {
        if (id) {
            try {
                const data = await fetch(
                    `https://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts/` +
                    id
                );
                const result = await data.json();

                setBlogMoreData(result);
            } catch {
                alert("Veri alinirken hata olustu.");
            }
        }
        else {
            alert("Veri alinirken hata olustu.");
        }
    }

    useEffect(() => {
        getMoreData(id);

    }, [id]);

    return (
        <Container>
            <div>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{blogMoreData?.title}</h2>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{blogMoreData?.featured_image ? (
                    <img
                        height={300}
                        width={600}
                        alt="article header"
                        src={blogMoreData.featured_image}
                    />
                ) : (
                    ""
                )}</h2>
                <p>{blogMoreData?.excerpt?.replace(/[^a-zA-Z ]/g, "")}</p>
            </div>
        </Container>
    );
}

export default BlogMorePage;
