// Import interfaces and modules
import { renderUi } from "./renderUi.js";
import { dbObj } from "./interface.js";

//Initialize Database in local storage
export var db: dbObj[] = [];
if (localStorage.getItem("myDb")) {
  db = JSON.parse(localStorage.getItem("myDb")!);
} else {
  localStorage.setItem("myDb", JSON.stringify(db));
}

//Add a new Item to Local Storage
type updateStateFuncType = (url: string, shortUrl: string) => void;
export const updateState: updateStateFuncType = (url, shortUrl) => {
  let db = JSON.parse(localStorage.getItem("myDb")!);
  db = [{ url, shortUrl }, ...db];
  var strDb = JSON.stringify(db);
  localStorage.setItem("myDb", strDb);
  renderUi(db);
};

// Delete an Item From Local Storage
type deleteStateItemFuncType = (id: string) => void;
export const deleteStateItem: deleteStateItemFuncType = (shortUrl) => {
  let myDb = JSON.parse(localStorage.getItem("myDb")!);
  let newDb = myDb.filter((e: dbObj) => {
    return e.shortUrl != shortUrl;
  });
  localStorage.setItem("myDb", JSON.stringify(newDb));
};
