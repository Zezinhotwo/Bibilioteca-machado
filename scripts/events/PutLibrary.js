import Library from "../Library.js";
import Book from "../Book.js";

export default class PutLibrary {
    #getDateDom
    constructor(getDateDom) {
        this.#getDateDom = getDateDom;
    }

    execute() {
        this.setBookLibrary();
    }


    setBookLibrary() {
        const data = this.#getDateDom.getDomDateBook();

        const exists = Library.listBooks().some(b => b.author == data.author);
        if (exists) {
            alert("Ja possui este livro");
            return false;
        }

        Library.addBook(
            new Book(
                crypto.randomUUID(),
                data.author,
                data.pages,
                data.description,
                data.img
            )
        );
    }
}