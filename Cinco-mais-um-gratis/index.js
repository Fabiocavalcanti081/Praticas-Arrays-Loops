const precos = [100, 500, 100, 200, 50];
const menorPreco = Math.min(...precos);
let total = 0;

for (const preco of precos) {
    total += preco;
}
if (precos.length >= 5) {
    console.log(total - menorPreco);
} else {
    console.log(total);
}