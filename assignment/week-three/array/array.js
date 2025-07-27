const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (!book.title || !book.author || !book.year) {
      console.log("Incomplete book info.");
      return;
    }
    if (this.books.some(b => b.title === book.title)) {
      console.log("Book already exists.");
      return;
    }
    this.books.push(book);
    console.log("Book added.");
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const i = this.books.findIndex(book => book.title === title);
    if (i !== -1) {
      this.books.splice(i, 1);
      console.log("Book removed.");
    } else {
      console.log("Book not found.");
    }
  }
};

library.addBook({ author: "George Orwell", year: 1949 });
library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); 
library.removeBook("The Hobbit");
console.log("Books:", library.books);
