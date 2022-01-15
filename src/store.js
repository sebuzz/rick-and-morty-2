import create from "zustand";
import { devtools } from "zustand/middleware";

// const store = set => ({
export const useStore = create(set => ({
	characters: [
		{
			id: 0,
			name: "Rick Sanchez jr",
			image: "#",
		},
	],

	setCharacters: characters => {
		console.log("attempting to setCharacters");
		set(state => ({
			characters: [...state.characters, ...characters],
		}));
	},
}));

// const useStore = create(devtools(store));
// const useStore = create(store);

// export default useStore;
