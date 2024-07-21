const myLibrary = [];

// ..... funcao construtora

// function Book(autor, paginas, descricao) {
//   // Construtor...
//   this.autor = autor;
//   this.paginas = paginas;
//   this.descricao = descricao;
// }

class Livro {
  constructor(autor, paginas, descricao) {
    this.autor = autor;
    this.paginas = paginas;
    this.descricao = descricao;
  }
}

export default function addBookToLibrary(autor, paginas, descricao) {
  // Adicionar livro à biblioteca
  const livro = new Livro(autor, paginas, descricao);
  myLibrary.push(livro);
  //   console.log(myLibrary)
}
