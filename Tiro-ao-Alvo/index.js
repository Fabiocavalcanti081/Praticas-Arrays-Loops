const disparos = [0, 50, 90, 80, 100, 80, 40];
let tiros = 0;

for (const disparo of disparos) {
    if (disparo >= 70) {
        tiros += 1;
    }
}
if (tiros < 3) {
    console.log("ELIMINADO");
} else {
    console.log(tiros);
}