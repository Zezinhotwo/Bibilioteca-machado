export default class Library {

    static library = new Array();

    static addBook(book) {
        this.library.push(book);
    }
    static listBoots() {
        return this.library
    }
    static updateBook(book) {
        let index = this.library.findIndex(b => b.id === book.id);
        if (index !== -1)
            this.library[index] = book;
        else
            throw Error("This Book not found");
    }
    static deleBook(id) {
        this.library = this.library.filter(book => book.id !== id);
    }

}