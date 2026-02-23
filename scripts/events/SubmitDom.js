export default class SubmitDom {

    #putLibrary
    #putcardDom

    constructor(putLibrary, putCardDom) {
        this.#putLibrary = putLibrary;
        this.#putcardDom = putCardDom;
        this.submitForm();
    }

    submitForm() {

        document
            .querySelector(".enviar")
            .addEventListener("click", (e) => {
                e.preventDefault();
                 this.#putLibrary();
                 this.#putcardDom();
                // this.setBookLibrary(this.getDomDateBook());
                // this.getBookInDom();
            });
    }
}