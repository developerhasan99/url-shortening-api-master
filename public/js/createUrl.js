export const createUrl = (url) => {
    let id = "";
    let urlLength = url.length;
    for (let i = 0; i < urlLength; i++) {
        let randomStr = url.charAt(Math.floor(Math.random() * urlLength));
        if (randomStr != "/" &&
            randomStr != "." &&
            randomStr != ":" &&
            id.length < 6) {
            id += randomStr;
        }
    }
    return "https://rel.link/" + id;
};
