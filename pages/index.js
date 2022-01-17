import Footer from "../organisms/footer";
import React, { useEffect, useState, useMemo } from "react";
import Header from "../organisms/header";
import Main from "../organisms/main";
import { useStore } from "../src/store";





const myURL = "https://rickandmortyapi.com/api/character/?page=";

const Home = () => {
	const myCharacters = useStore(state => state.characters);

	console.log("here are myCharacters: ", myCharacters);
	// const characters = data.results;
	// const [characters, setCharacters] = useState([]);
	const characters = useStore(state => state.characters);
	const setCharacters = useStore(state => state.setCharacters);
	const update = useStore(state => state.toggleFavorite);
	const setFavorite = useStore(state => state.setFavorite);
	const counter = useStore(state => state.counter);
console.log("counter: ", counter);
	/* Fetch process*/
	useEffect(() => {
		fetch(myURL + counter)
			.then(response => response.json())
			.then(json => {
				console.log("PAGE ", counter);
				const fetchedArray = json.results;
				// for every character that was fetched...
				fetchedArray.forEach(function (item){
					// check if it was previously stored
					const storageKey = "rick-morty-" + item.id;
					// if not, add the 'favorite property'
					if (!window.localStorage.getItem(storageKey)) {
						item.favorite = false;
						// if it has,  set store state to the one in local storage
					} else {
						console.log("storageKey:", storageKey)
						const currentCharacter = JSON.parse(window.localStorage.getItem(storageKey));
						console.log("currentChar:", currentCharacter);
						const isFavorite = currentCharacter.favorite;
						console.log("isFavorite: ", isFavorite);
						setFavorite(item, isFavorite);

					}

				});

				setCharacters(fetchedArray);
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
