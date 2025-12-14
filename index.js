const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

let t = Number(input[0]);
let pos = 1;

for (let i = 0; i < t; i++) {

    let line = input[pos];
    pos++;

    let partes = line.split(";");

    let entradas = {};
    let salidas = {};

    for (let p of partes) {
        let letra = p.split(":")[0];
        entradas[letra] = 0;
        salidas[letra] = 0;
    }

    for (let p of partes) {
        let dividido = p.split(":");
        let origen = dividido[0];
        let destinos = dividido[1];

        salidas[origen] = destinos.length;

        for (let d of destinos) {
            entradas[d] = entradas[d] + 1;
        }
    }

    let letras = Object.keys(entradas).sort();

    let salida = "";

    for (let j = 0; j < letras.length; j++) {
        let l = letras[j];
        let grado = entradas[l] + salidas[l];

        salida += l + "=" + grado;

        if (j < letras.length - 1) {
            salida += ", ";
        }
    }

    console.log(salida);
}
