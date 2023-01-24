const sequencia = ">>><>"
let imagem = 0;

for (const seta of sequencia) {
    if (seta === ">") {
        imagem++;
    } else if (seta === "<") {
        imagem--;
    }
    if (imagem > 6) {
        imagem = 0;
    }
    if (imagem < 0) {
        imagem = 6;
    }
}

console.log(imagem);