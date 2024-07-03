
const myLibrary = [];
function Book(autor, paginas, descricao) {
  // Construtor...
  this.autor = autor;
  this.paginas = paginas;
  this.descricao = descricao;
}

export default function addBookToLibrary(autor, paginas, descricao) {
  // Adicionar livro à biblioteca
  const livro = new Book(autor, paginas, descricao);
  myLibrary.push(livro);
//   console.log(myLibrary)
}



