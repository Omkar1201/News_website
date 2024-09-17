import React, { createContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
	const [data, setdata] = useState([]);
	const [category, setcategory] = useState("indian")
	const [loading, setloading] = useState(false);
	const [search_txt, setsearch_txt] = useState('');
	const [liked_article, setLikedArticles] = useState([]);
	const [clicked, setclicked] = useState(false);
	const [iserror, setiserror] = useState(false);
	const [username, setusername] = useState('')
	const [password, setpassword] = useState('')
	const [name, setname] = useState('')
	const navigate = useNavigate();

	const fetchData = useCallback(async () => {
		try {
			setloading(true);
			const url = `https://news67.p.rapidapi.com/v2/topic-search?batchSize=30&languages=en&search=${category}`;
			const options = {
				method: 'GET',
				headers: {
					'x-rapidapi-key': '550d7eda1amsh530bf6f993f2135p1aa95fjsna8050654564b',
					'x-rapidapi-host': 'news67.p.rapidapi.com'
				}
			};
 
			try {
				const response = await fetch(url, options);
				const result = await response.json();
				setdata(result.news)
				console.log(result);
			} catch (error) {
				console.error(error);
			}
		} catch (error) {
			console.error(error);
			setiserror(true);
		}
		finally{setloading(false)}
	}, [category]);
	useEffect(() => {
		fetchData();
	}, [category, fetchData]);


	function handlesubmit(event) {
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
		clicked, setclicked,
		iserror,
		username, setusername,
		password, setpassword,
		name, setname
	};
	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	);
}
