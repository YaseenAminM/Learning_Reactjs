const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// ************** 001 Section Overview **************

// ************** 002 Destructuring Objects and Arrays **************

const book = getBook(3);
// book;

// const title = book.title;
// const author = book;

// title;
// author;

// console.log(title, author);

// Object Destructuring
const { title, author, publicationDate, genres, hasMovieAdaptation, pages } =
  book;

// title;
// author;
// genres;

// const primaryGenre = genres[0];
// const secondaryGenr = genres[1];

// Array Destructuring
// const [primaryGenre, secondaryGenr] = genres;

// primaryGenre;
// secondaryGenr;

// ************** 003 RestSpread Operator **************

//  Rest Operator
// const [primaryGenre, secondaryGenr, ...otherGenres] = genres;

// primaryGenre;
// secondaryGenr;
// otherGenres;

// Spread Operator

// const newGenres = [...genres, "epic fantasy"];

// newGenres;

// Spread Operator in Objects
// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   pages: 1210,
// };
// updatedBook;

// ************** 004 Template Literals **************

// const summary = `${title}, a ${pages}-pages long book, was book written by ${author} and published ${get}. The book has ${
//   hasMovieAdaptation ? "" : "not"
// } been adapted as a movie`;

// summary;

// ************** 005 Ternaries Instead of ifelse Statements **************

const pagesRange = pages > 100 ? "over a thousand" : "less than 1000";

console.log(`The book has ${pagesRange} pages`);

// const summary = `${title}, a ${pages}-pages long book, was book written by ${author} and published ${
//   publicationDate.split("-")[0]
// }. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;

// summary;

// ************** 006 Arrow Functions **************

// Function Decleration
// function getYear(str) {
//   return str.split("-")[0];
// }

// Arrow Function
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-pages long book, was book written by ${author} and published ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;

// summary;

// ************** 007 Short-Circuiting And Logical Operators &&, , **************

// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && "This book has a movie");

/*
==========================
  Falsy Values in JS
==========================
- false
- 0
- -0
- 0n        (BigInt zero)
- ""        (empty string)
- null
- undefined
- NaN

*/

/*

==========================
  Truthy Values in JS
==========================
Basically everything else, including:
- true
- "0"        (string with zero)
- "false"    (string with text "false")
- " "        (non-empty string, even spaces)
- []         (empty array)
- {}         (empty object)
- function(){} (any function)
- new Date()
- Infinity and -Infinity
- All non-zero numbers (positive & negative)
*/

// console.log("Yaseen" && "Some string");
// console.log(0 && "Sme string");

// console.log(true || "Some string");
// console.log(false || "Some string");

// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);

// NULLISH COALESCING OPERATOR (??)
// const countWrong = book.reviews.librarything.reviewsCount ?? "no data";
// countWrong;

// ************** 008 Optional Chaining **************

function getTotalReviewCount(book) {
  const goodRead = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const libraryThing = book?.reviews?.librarything?.reviewsCount ?? 0;
  return goodRead + libraryThing;
}

// console.log(getTotalReviewCount(book));

// ************** 009 The Array map Method **************

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
// titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  };
});

essentialData;

// ************** 010 The Array filter Method **************
// ************** 011 The Array reduce Method **************
// ************** 012 The Array sort Method **************
// ************** 013 Working With Immutable Arrays **************
// ************** 014 Asynchronous JavaScript Promises **************
// ************** 015 Asynchronous JavaScript AsyncAwait **************
