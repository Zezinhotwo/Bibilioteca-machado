

export default class Book {
  #id = crypto.randomUUID;
  #autor = "";
  #pages = 0;
  #descricao = "";
  
constructor(){}
  constructor(autor, pages, descricao) {
    this.#autor = autor;
    this.#pages = pages;
    this.#descricao = descricao;
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
