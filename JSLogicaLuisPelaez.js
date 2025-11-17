let num = 21;

if (num % 3 === 0 || num % 7 === 0) {
    console.log(`${num} és múltiple de 3 o de 7`);
} else {
    console.log(`${num} no és múltiple de 3 ni de 7`);
}
let x = 12;
let y = 55;

x >= 10 || x <= 50 ? console.log(x, "esta en el rang"): null
y >= 10 || y <= 50 ? console.log(x, "esta en el rang"): null

let xx = 5.99;
if (xx >= 10){
    console.log("Excel·lent")
} else if (xx >= 8.99) {
    console.log("Notable")
} else if(xx >= 6.99){
    console.log("Bé")
} else if(xx >= 5.99){
    console.log("Suficient")
}else if (xx >= 4.99) {
    console.log("Suspes")
}

let num2 = 20;
bool =num2 % 3 === 0 || num2 % 7 === 0
    switch (bool){
        case true:
            console.log(`${num2} és múltiple de 3 o de 7`);
        break
        case false:
            console.log(`${num2} no és múltiple de 3 ni de 7`);
        break
    }

function maxN(x5) {
    let n5 = Math.floor((-1 + Math.sqrt(1 + 8 * x)) / 2);
    return n5;
}
console.log("El máximo n para x es:", maxN(15));
