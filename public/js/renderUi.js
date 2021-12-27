// Import modules and interfaces
import { deleteStateItem } from "./state.js";
// Get parent Element for urlItem from DOM
const results = document.querySelector("#results-wrapper");
export const renderUi = (state) => {
    results.innerHTML = "";
    state.map((obj) => {
        const urlItem = document.createElement("div");
        urlItem.setAttribute("class", "result");
        const h4Url = document.createElement("h4");
        h4Url.setAttribute("class", "url");
        h4Url.textContent = obj.url;
        const shortUrlWrapper = document.createElement("div");
        shortUrlWrapper.setAttribute("class", "shorturl-wrapper");
        const h4ShortUrl = document.createElement("h4");
        h4ShortUrl.setAttribute("class", "short-url");
        h4ShortUrl.textContent = obj.shortUrl;
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete-url");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteStateItem(obj.shortUrl);
            results.removeChild(urlItem);
        });
        const copyBtn = document.createElement("button");
        copyBtn.setAttribute("class", "copy-url");
        copyBtn.textContent = "Copy";
        copyBtn.addEventListener("click", () => {
            window.navigator.clipboard.writeText(obj.shortUrl);
            copyBtn.textContent = "Copied";
        });
        shortUrlWrapper.appendChild(h4ShortUrl);
        shortUrlWrapper.appendChild(deleteBtn);
        shortUrlWrapper.appendChild(copyBtn);
        urlItem.appendChild(h4Url);
        urlItem.appendChild(shortUrlWrapper);
        results.appendChild(urlItem);
    });
};
