import PutCardDom from "../scripts/events/PutCardDom.js";
import Library from "../scripts/Library.js";
import { books } from "./dates.js";

export default function DateTesting() {
    books.forEach(book => {
        Library.addBook(book);
    });
    new PutCardDom(Library.listBooks()).getBookInDom();
}


