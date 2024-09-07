import { BookProps } from "@/interfaces/homeInterfaces";

const books: Record<string, BookProps> = {
	"1": {
		id: "1",
		title: "Animal Farm",
		author: "George Orwell",
		cover: "/covers/AnimalFarm.jpg",
		format: "Novel",
		demographic: "Adult",
		genres: ["Fiction", "Political Intrigue", "Allegory"],
		tropes: ["Animals", "Dystopia", "Rebellion", "Class Warfare"],
	},
	"2": {
		id: "2",
		title: "Attack on Titan",
		author: "Hajime Isayama",
		cover: "/covers/AttackOnTitan.jpg",
		format: "Manga",
		demographic: "Young Adult",
		genres: ["Fantasy", "Dystopian", "Action"],
		tropes: ["Apocalypse", "Hero’s Journey", "Monsters", "Class Warfare"],
	},
	"3": {
		id: "3",
		title: "Fahrenheit 451",
		author: "Ray Bradbury",
		cover: "/covers/Fahrenheit451.jpg",
		format: "Novel",
		demographic: "Adult",
		genres: ["Sci-Fi", "Dystopian", "Fiction"],
		tropes: ["Dystopia", "Rebellion", "Censorship", "Prophecy"],
	},
	"4": {
		id: "4",
		title: "Lord of the Flies",
		author: "William Golding",
		cover: "/covers/LordOfTheFlies.jpg",
		format: "Novel",
		demographic: "Young Adult",
		genres: ["Fiction", "Adventure", "Psychological"],
		tropes: ["Survival", "Coming of Age", "Class Warfare", "Outcast"],
	},
	"5": {
		id: "5",
		title: "The Grapes of Wrath",
		author: "John Steinbeck",
		cover: "/covers/TheGrapesOfWrath.jpg",
		format: "Novel",
		demographic: "Adult",
		genres: ["Historical Fiction", "Drama"],
		tropes: ["Class Warfare", "Family", "Oppressed Society", "Survival"],
	},
	"6": {
		id: "6",
		title: "Tokyo Ghoul",
		author: "Sui Ishida",
		cover: "/covers/TokyoGhoul.jpg",
		format: "Manga",
		demographic: "Young Adult",
		genres: ["Horror", "Fantasy", "Action"],
		tropes: ["Monsters", "Superpowers", "Body Horror", "Found Family"],
	},
	"7": {
		id: "7",
		title: "The Very Hungry Caterpillar",
		author: "Eric Carle",
		cover: "/covers/TheVeryHungryCaterpillar.jpg",
		format: "Picture Book",
		demographic: "Children",
		genres: ["Fiction", "Educational"],
		tropes: ["Animals", "Transformation", "Coming of Age"],
	},
	"8": {
		id: "8",
		title: "The Tall Book of Nursery Tales",
		author: "Aleksey & Olga Ivanov",
		cover: "/covers/TheTallBookOfNurseryTales.jpg",
		format: "Anthology",
		demographic: "Children",
		genres: ["Fantasy", "Folk Tales"],
		tropes: ["Fairy Tales", "Moral Lessons", "Animals", "Magic"],
	},
};

export function getAllBooks(): Record<string, BookProps> {
	return books;
}

export function getBook(id: string): BookProps {
	return books[id];
}
