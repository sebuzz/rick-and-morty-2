import Footer from "../organisms/footer";
import React, { useEffect, useState, useMemo } from "react";
import Header from "../organisms/header";
import Main from "../organisms/main";
import { useStore } from "../src/store";




const myURL = "https://rickandmortyapi.com/api/character/?page=3";

const Home = () => {
	const myCharacters = useStore(state => state.characters);

	console.log("here are myCharacters: ", myCharacters);
	// const characters = data.results;
	// const [characters, setCharacters] = useState([]);
	const characters = useStore(state => state.characters);
	const setCharacters = useStore(state => state.setCharacters);

	/* Fetch process*/
	useEffect(() => {
		fetch(myURL)
			.then(response => response.json())
			.then(json => {
				console.log("PAGE ");

				setCharacters(json.results);
			})
			.catch(error_ => {
				// setError(error_);
			})
			.finally(() => {
				console.log("loaded page ");
				// setLoading(false);
			});
	}, [setCharacters]);
	return (
		<div>
			<title>Rick and Morty App</title>
			<Header />

			<Main />
			<Footer />
		</div>
	);
};

export default Home;
