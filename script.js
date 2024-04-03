const addLib = document.querySelector(".AddLib");
const forms = document.querySelector(".formulario");
const publiLib = document.querySelector(".publiLib");
const colecao = document.querySelector(".colecao");
const deletar = document.querySelector("buttom")
const fechar = document.querySelector(".fechar")


const myLibrary = [];

forms.classList.add("ocultar")
addLib.addEventListener('click', () => {
  forms.classList.toggle('ocultar');
 
});
fechar.addEventListener('click', () => {
  forms.classList.toggle('ocultar');
 
});



function Book(titulo, autor, paginas, link_livro) {
  // the constructor...
  this.name = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.link_livro = link_livro;


}


function addBookToLibrary(titulo, autor, paginas, link_livro) {
  // do stuff here

  const livro = new Book(titulo, autor, paginas, link_livro);


  const novLibi = document.createElement("div");
  const TITULO = document.createElement("h3")
  const AUTOR = document.createElement("span")
  const lk_livro = document.createElement("img")
  link_livro.src = livro.link_livro;

  const PAGINAS = document.createElement("p")
  const DELETAR = document.createElement("button")
  const checkbox = document.createElement("input")
  const lendo = document.createElement("span")
  checkbox.type = "checkbox"
  checkbox.className = "checkbox";
  lendo.innerHTML = "<br/>lido!"
  DELETAR.textContent = "DELETAR"
  DELETAR.setAttribute("class", "buttom")
  novLibi.setAttribute("class", "deletar")

  TITULO.append(livro.name)
  AUTOR.append(livro.autor)
  lk_livro.src = livro.link_livro;
  PAGINAS.append(livro.paginas)

  DELETAR.addEventListener('click', (event) => {
    event.preventDefault()
    novLibi.remove()
    myLibrary.remove(livro)
    myLibrary = myLibrary.filter(!livro);
  })

  novLibi.appendChild(lk_livro)
  novLibi.appendChild(lendo)
  novLibi.appendChild(TITULO)
  novLibi.appendChild(PAGINAS)
  novLibi.appendChild(AUTOR)
  novLibi.appendChild(DELETAR)
  lendo.appendChild(checkbox)

  myLibrary.push(colecao)
  colecao.appendChild(novLibi)

}
publiLib.addEventListener('click', () => {

  const title = document.getElementById("title");
  const autor = document.getElementById("autor");
  const paginas = document.getElementById("paginas");
  const link_livro = document.getElementById("livro");
  title.value = "";
  autor.value = "";
  paginas.value = "";
  addBookToLibrary(title.value, autor.value, paginas.value, link_livro.value)
})
addBookToLibrary("Dom Casmurro", "Machado de Assis", 346, "img/dom-casmurro.png")
addBookToLibrary("Dom Casmurro", "Machado de Assis", 346, "img/dom-casmurro.png")
addBookToLibrary("Dom Casmurro", "Machado de Assis", 346, "img/dom-casmurro.png")
addBookToLibrary("Dom Casmurro", "Machado de Assis", 346, "img/dom-casmurro.png")
addBookToLibrary("Dom Casmurro", "Machado de Assis", 346, "img/dom-casmurro.png")
addBookToLibrary("Dom Casmurro", "Machado de Assis", 346, "img/dom-casmurro.png")