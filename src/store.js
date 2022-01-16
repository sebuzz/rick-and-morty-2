import create from "zustand";
import { devtools } from "zustand/middleware";

// const characters = useStore(state => state.characters);
// const store = set => ({
export const useStore = create(set => ({
	characters: [
		{
			id: 0,
			name: "Rick Sanchez jr",
			image: "#",
			favorite: false,
		},
	],

	setCharacters: characters => {
		console.log("attempting to setCharacters");
		set(state => ({
			characters: [...state.characters, ...characters],
		}));
	},
	updateCharacter: (character) => {

		console.log("updating character: ", character);
		character.favorite = (!character.favorite);
		// console.log("character favorite: ", characters.id.favorite);
	}
}));

// const useStore = create(devtools(store));
// const useStore = create(store);

// export default useStore;
