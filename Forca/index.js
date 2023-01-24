const palpite = "a";
const palavra = "abelha";
let acertos = 0;

for (const letra of palavra) {
    if (letra === palpite) {
        acertos += 1;
    }
}

console.log(acertos);