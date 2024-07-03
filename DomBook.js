import addBookToLibrary from "./construtor.js";

// REMOVER BOOK
function DomRemove() {
  const removerLivro = document.createElement("button");
  removerLivro.innerHTML = "X";
  removerLivro.classList.add("removerLivro");
  removerLivro.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.parentElement.remove();
  });
  return removerLivro;
}

// REMOVE TO FORM
const Domform = document.querySelector(".addBook");
const removerLivro = document.createElement("button");
removerLivro.innerHTML = "X";
removerLivro.classList.add("removerLivro");
removerLivro.addEventListener("click", () => {
  Domform.classList.toggle("hide");
});
Domform.appendChild(removerLivro);

// END REMOVE TO FORM
const add = document.querySelector(".add");
add.addEventListener("click", () => {
  Domform.classList.toggle("hide");
});
// Add Dom Library
function DomAddBookToLibrary(nome, pag, descricao) {
  const estante = document.querySelector(".estante");
  //Image Book
  const DomImg = document.createElement("input");
  DomImg.type = "image";
  //   DomImg.style.height = "15em";
  DomImg.src = descricao;
  DomImg.classList.add("imgBook");

  // Cria o div do Book
  const DomLivro = document.createElement("div");
  DomLivro.classList.add("livro");

  // Cria o checkbox
  const DomCheckbox = document.createElement("input");
  DomCheckbox.classList.add("checkBox");
  DomCheckbox.type = "checkbox";

  // Adiciona o livro à biblioteca
  addBookToLibrary(nome, pag, descricao);

  // Adiciona detalhes do livro ao DOM
  DomLivro.innerText = `${nome}. \nN° - ${pag}. ${DomImg.value}`;
  DomLivro.appendChild(DomImg);
  DomLivro.appendChild(DomRemove());
  DomLivro.appendChild(DomCheckbox);
  estante.appendChild(DomLivro);
}
// ********** BOOKS TEST

DomAddBookToLibrary(
  "Quarta Capa",
  "264",
  "https://editoraflutuante.com.br/wp-content/uploads/2018/08/Quarta-Capa-Frente-1.jpg"
);
// 2
DomAddBookToLibrary(
  "A Névoa Da Floresta",
  "353",
  "https://marketplace.canva.com/EAD0UPCkitY/1/0/1024w/canva-capa-de-livro-de-suspense-monocrom%C3%A1tica-com-foto-de-floresta-U1dpnJ3bwKw.jpg"
);
//3
DomAddBookToLibrary(
  "Antes Que Você Diga Adeus",
  "195",
  "https://marketplace.canva.com/EAE6PMW8esk/1/0/1003w/canva-capa-de-livro-vermelho-e-preto-contorno-romance-chick-lit-5cdERsfaKTY.jpg"
);
//4
DomAddBookToLibrary(
  "Mestre Do Tempo",
  "241",
  "https://ocapista.com.br/imgs/capas/capa_livro_fantasia.jpg"
);

// ********** END BOOKS TEST

// Start
export default function iniciar() {
  const enviar = document.querySelector(".enviar");
  enviar.addEventListener("click", (event) => {
    event.preventDefault();

    function DomForm() {
      let DomLivroForm = {
        name: "",
        link: "",
        pag: "",
      };

      DomLivroForm.name = document.getElementById("DomNome").value;
      DomLivroForm.link = document.getElementById("caminho").value;
      DomLivroForm.pag = document.getElementById("paginas").value;
      // DomLivroForm.pag = 230;
      console.log("nome " + DomLivroForm.name); // Log para verificar os dados coletados
      console.log("link " + DomLivroForm.link); // Log para verificar os dados coletados
      DomAddBookToLibrary(
        DomLivroForm.name,
        DomLivroForm.pag,
        DomLivroForm.link
      );
    }
    DomForm();
  });
}
