const book = {
    title: "The Poet X",
    author: "Elizabeth Acevedo",
    year: "2018",
    getSummary: function (){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
        }
};

book.genre = "Young Adult";

delete book.year;

console.log(book);

