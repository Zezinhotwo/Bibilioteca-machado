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
            description: document.querySelector("#description").value,
            img: document.querySelector("#imgSrc").value

        }
        return book;
    }

    setBookLibrary(book) {

        const exists = Library.listBooks().some(b => b.author == book.author);
        if (exists) {
            alert("Ja possui estete livro");
            return false;
        }
        Library.addBook(
            new Book(crypto.randomUUID(), book.author, book.pages, book.description, book.img));
    }

    getBookInDom() {

        const books = Library.listBooks();
        const estante = document.querySelector(".estante");
        estante.innerHTML = " ";

        const frag = document.createDocumentFragment();

        books.forEach(book =>
            frag.appendChild(this._domCardBook(
                book.getId(),
                book.getAuthor(),
                book.getImage(),
                book.getPages(),
                book.getDescription()))
        );

        estante.appendChild(frag);
        console.log(books)
        console.log(books[0].getImage())
    }

    _domCardBook(id, n, image, pg, descpt) {

        const card = document.createElement("div");
        const Id = document.createElement("p");
        const name = document.createElement("p");
        const img = document.createElement("img");
        const pages = document.createElement("p");
        const description = document.createElement("p");

        Id.innerText = id;
        name.innerText = n;
        img.src = image;
        pages.innerText = pg;
        description.innerText = descpt;

        card.appendChild(Id);
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(pages);
        card.appendChild(description);

        return card;
    }

}