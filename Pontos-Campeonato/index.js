const resultados = ["V", "E", "V", "E"];
let pontos = 0;

for (const resultado of resultados) {
    if (resultado === "V") {
        pontos += 3;
    } else if (resultado === "E") {
        pontos += 1;
    }
}

console.log(pontos);