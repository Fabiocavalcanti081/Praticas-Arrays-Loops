const stringCorrompida = "*Canis %lupus )familiaris"
let stringPurificada = "";

for (string of stringCorrompida) {
    if (string === "!" || string === "@" || string === "#" || string === "$" || string === "%" || string === "&" || string === "*" || string === "(" || string === ")" || string === ".") {

    } else {
        stringPurificada += string;
    }
}

console.log(stringPurificada);