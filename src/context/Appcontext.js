import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";
import {  useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState("india")
  const [loading, setloading] = useState(false);
  const [search_txt, setsearch_txt] = useState('');
  const [liked_article,setLikedArticles]=useState([]);
  const[clicked,setclicked]=useState(false);
  const[iserror,setiserror]=useState(false)
  const navigate=useNavigate();
  // console.log(liked_article);
  const fetchData = useCallback(async () => {
    try {
      setloading(true);
      const response = await axios.post(
        'https://news-search4.p.rapidapi.com/news',
        new URLSearchParams({
          find: category,
          sortby: 'popular'
        }),
        {
          headers: {
            // ... (rest of your code)
            'content-type': 'application/x-www-form-urlencoded',
            //6e78f7dd04mshf78c5bff81b790ap1d9c2bjsn8370e0f7313d
            // 9e7d3ad949msh3ff6c6e10e476b7p1f566ajsn5160852665b4
            // 550d7eda1amsh530bf6f993f2135p1aa95fjsna8050654564b
            // fc66ee2e6cmshed7b21343201efep1d6cd3jsnb778b0c6eb0f
            // 1b9819f7acmsh1bafe0b856c4378p1d49d5jsn6d137155b38f
            // 3e5b1c40bdmsh3bec8f6ef57e01fp1acdc8jsne3bc8adbc2ea
            // 361fabf4b8mshafebafe5290098fp1d1451jsnd862b326e68f
            'X-RapidAPI-Key': '361fabf4b8mshafebafe5290098fp1d1451jsnd862b326e68f', // Replace with your actual API key
            'X-RapidAPI-Host': 'news-search4.p.rapidapi.com'
          }
        }
      );
      setdata(response.data.response);
      setloading(false);
    } catch (error) {
      console.error(error);
      setiserror(true);
    }
  }, [category]);
  
  useEffect(() => {
    fetchData();
  }, [category, fetchData]);
  

  function handlesubmit(event) {
    // console.log(search_txt);
    setcategory(search_txt);
    navigate('/')
    event.preventDefault();
  }

  
  const contextValue = {
    data,
    loading,
    search_txt,
    setsearch_txt,
    setcategory,
    fetchData,
    handlesubmit,
    liked_article,
    setLikedArticles,
    clicked,setclicked,
    iserror
  };
  // console.log(search_txt);
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
