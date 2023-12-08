import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [blogData, setBlogData] = useState([]);

    const getBlogData = async () => {
        try {
          const data = await fetch(
            `https://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts/`
          );
          const result = await data.json();
  
          setBlogData(result);
        } catch {
          alert("Veri alinirken hata olustu.");
        }
      };
  
      useEffect(() => {
        
        getBlogData();
        
      }, []);

    return (
        <GlobalContext.Provider value={
            {
                blogData
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    );
}