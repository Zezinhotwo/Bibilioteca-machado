export default class GetDateDom {

    getDomDateBook() {
        return {
            author: document.querySelector("#name").value,
            pages: document.querySelector("#pages").value,
            description: document.querySelector("#description").value,
            img: document.querySelector("#imgSrc").value
        }
    }
}