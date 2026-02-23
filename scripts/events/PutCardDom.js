export default class PutCardDom {

    #books

    constructor(library) {
        this.#books = library;
    }

    getBookInDom() {

        const estante = document.querySelector(".estante");
        estante.innerHTML = "";

        const frag = document.createDocumentFragment();

        this.#books.forEach(book =>
            frag.appendChild(this._domCardBook(
                book.getId(),
                book.getAuthor(),
                book.getImage(),
                book.getPages(),
                book.getDescription()))
        );

        estante.appendChild(frag);
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
        card.classList.add("livro")
        return card;
    }
}