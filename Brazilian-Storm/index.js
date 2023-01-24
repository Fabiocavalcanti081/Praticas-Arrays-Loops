const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let quantidade = 0;
let notaMaior = Math.max(...notas);
let notaMenor = Math.min(...notas);
let soma = 0;

for (const nota of notas) {
    quantidade += 1;
    soma += nota
}

let notaFinal = (soma - notaMaior - notaMenor) / (quantidade - 2);
console.log(notaFinal); 