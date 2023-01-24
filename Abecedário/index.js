const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"]
let perderam = 0;

for (const letras of palavras) {
    if (letras[0] != letra) {
        perderam += 1;
    }
}

console.log(perderam);