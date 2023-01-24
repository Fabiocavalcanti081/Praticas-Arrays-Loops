const primeiraLetra = "a";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];
let nenhuma = 0;

for (const palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        console.log(palavra);
        nenhuma += 1;
    }
}
if (nenhuma === 0) {
    console.log("NENHUMA");
}