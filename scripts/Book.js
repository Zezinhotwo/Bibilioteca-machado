

export default class Book {
  #id = 0;
  #autor = "";
  #pages = 0;
  #descricao = "";
  #image = "";

  constructor(id, autor, pages, descricao, image) {
    this.#id = id;
    this.#autor = autor;
    this.#pages = pages;
    this.#descricao = descricao;
    this.#image = image;
  }

  getId() {
    return this.#id;
  }

  getAuthor() {
    return this.#autor;
  }

  getPages() {
    return this.#pages;
  }

  getDescription() {
    return this.#descricao;
  }

  getImage() {
    return this.#image;
  }

  setImage(img) {
    this.#image = img;
  }

  setAutor(name) {
    this.#autor = name;
  }

  setPages(num) {
    if (num === 0) return;
    this.#pages = num;
  }

  setDescription(text) {
    if ((text === " ") | (text === false)) return;
    this.#descricao = text;
  }

  isEquals(id) {
    return this.#id === id;
  }
}
