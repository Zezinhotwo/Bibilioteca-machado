import Book from "../scripts/Book.js";
import Library from "../scripts/Library.js";

const quartaCapa = new Book(
    crypto.randomUUID(),
    "Quarta Capa",
    264,
    "Quarta Capa é um romance cristão que mistura suspense, drama e reflexão espiritual. A história acompanha um escritor que, após um trágico acontecimento envolvendo sua família, mergulha em dor, culpa e questionamentos profundos sobre fé e perdão.",
    "https://editoraflutuante.com.br/wp-content/uploads/2018/08/Quarta-Capa-Frente-1.jpg"
);
const nevoaDaFlorest = new Book(
    crypto.randomUUID(),
    "A Névoa Da Floresta",
    353,
    "A Névoa da Floresta é um romance de suspense que combina mistério e drama psicológico. A história gira em torno de segredos do passado que voltam à tona em meio a uma pequena comunidade cercada por uma floresta envolta em névoa constante.",
    "https://marketplace.canva.com/EAD0UPCkitY/1/0/1024w/canva-capa-de-livro-de-suspense-monocrom%C3%A1tica-com-foto-de-floresta-U1dpnJ3bwKw.jpg",
);

const antesQueVoceDigaAdeus = new Book(
    crypto.randomUUID(),
    "Antes Que Você Diga Adeus",
    195,
    "Antes Que Você Diga Adeus é um romance emocionante que aborda amor, perda e recomeço. A história acompanha personagens que precisam lidar com despedidas inesperadas e com as consequências de palavras não ditas.",
    "https://marketplace.canva.com/EAE6PMW8esk/1/0/1003w/canva-capa-de-livro-vermelho-e-preto-contorno-romance-chick-lit-5cdERsfaKTY.jpg",
);

const mestreDoTempo = new Book(
    crypto.randomUUID(),
    "Mestre Do Tempo",
    241,
    "O Mestre do Tempo é um romance espírita que aborda temas como reencarnação, destino e evolução espiritual. A história acompanha personagens que, ao longo de diferentes existências, enfrentam desafios, erros e aprendizados que influenciam seu crescimento moral.",
    "https://ocapista.com.br/imgs/capas/capa_livro_fantasia.jpg",
)
export const books = new Array(quartaCapa, nevoaDaFlorest, antesQueVoceDigaAdeus, mestreDoTempo);

