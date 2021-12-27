console.time("test");

import { createUrl } from "./createUrl.js";
import { db, updateState } from "./state.js";
import { renderUi } from "./renderUi.js";

const urlForm = document.querySelector("#url-form") as HTMLFormElement;

if (db.length !== 0) {
  renderUi(db);
}

urlForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let url = (e.target as HTMLFormElement).url.value;
  if (url != "") {
    (e.target as HTMLFormElement).url.style.border = "transparent 2px solid";
    let shortUrl = createUrl(url);
    updateState(url, shortUrl);
  } else {
    (e.target as HTMLFormElement).url.style.border = "#f15056 2px solid";
    console.log("invalid url");
  }
});

console.timeEnd("test");
