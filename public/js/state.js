// Import interfaces and modules
import { renderUi } from "./renderUi.js";
//Initialize Database in local storage
export var db = [];
if (localStorage.getItem("myDb")) {
    db = JSON.parse(localStorage.getItem("myDb"));
}
else {
    localStorage.setItem("myDb", JSON.stringify(db));
}
export const updateState = (url, shortUrl) => {
    let db = JSON.parse(localStorage.getItem("myDb"));
    db = [{ url, shortUrl }, ...db];
    var strDb = JSON.stringify(db);
    localStorage.setItem("myDb", strDb);
    renderUi(db);
};
export const deleteStateItem = (shortUrl) => {
    let myDb = JSON.parse(localStorage.getItem("myDb"));
    let newDb = myDb.filter((e) => {
        return e.shortUrl != shortUrl;
    });
    localStorage.setItem("myDb", JSON.stringify(newDb));
};
