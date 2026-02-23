import DomEventHandler from "./scripts/DomEventHandler.js";
import DateTesting from "./test/testing.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = new DomEventHandler();
    app.execute();
    DateTesting();
});

