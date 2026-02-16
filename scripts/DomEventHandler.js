import Book from "./Book.js";
import Library from "./Library.js"

export default class EventHandler {
    constructor() {
        this.submitForm();
    }

    submitForm() {
        document
            .querySelector(".enviar")
            .addEventListener("click", (e) => {
                e.preventDefault();
                this.setBookLibrary(this.getDomDateBook());
                this.getBookInDom()
            });
    }

    getDomDateBook() {
        const book = {
            author: document.querySelector("#name").value,
            pages: document.querySelector("#pages").value,
            description: document.querySelector("#description").value
        }
        return book;
    }

    setBookLibrary(book) {

        const exists = Library.listBooks().some(b => b.author == book.author);
        if (exists) {
            alert("Ja possui estete livro");
            return false;
        }
        Library.addBook(new Book(crypto.randomUUID(), book.author, book.pages, book.description));

    }

    getBookInDom() {
        const books = Library.listBooks();
        alert("")

        const estante = document.querySelector(".estante");
        console.log(books)

    }
}