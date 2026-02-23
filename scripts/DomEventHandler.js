import PutCardDom from "./events/PutCardDom.js";
import GetDateDom from "./events/GetDateDom.js";
import Library from "./Library.js";
import PutLibrary from "./events/PutLibrary.js";

export default class EventHandler {
    constructor() {
        this._hiddenCard();
        this._showCard();
    }

    execute(){
        this.submitForm();
    }
    submitForm() {
        document.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();

            const getData = new GetDateDom();
            const lib = new PutLibrary(getData);

            lib.execute();
            const renderer = new PutCardDom(Library.listBooks());
            renderer.getBookInDom();
        });
    }

    _hiddenCard() {
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("closeCard")) {
                document.querySelector(".box").classList.toggle("hidden");
                console.log("tem");
            }
        });
    }

    _showCard() {
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("add")) {
                document.querySelector(".box").classList.toggle("hidden");
                console.log("tem");
                console.log(document.querySelectorAll(".box"));
            }
        });
    }

}