// https://edabit.com/challenge/6R6gReGTGwzpwuffD

function sevenBoom(arr) {
  return arr.join("").includes(7) ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoom([2, 6, 37, 9, 3]));
console.log(sevenBoom([2, 6, 9, 3]));
///////////////
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getTitle() {
    return `Title: ${this.title}`;
  }

  getAuthor() {
    return `Author: ${this.author}`;
  }
}

const PP = new Book("Pride and Prejudice", "Jane Austen");
const H = new Book("Hamlet", "William Shakespeare");
const WP = new Book("War and Peace", "Leo Tolstoy");
