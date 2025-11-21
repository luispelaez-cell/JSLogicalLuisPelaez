let num = 21;

if (num % 3 === 0 || num % 7 === 0) {
    console.log(`${num} és múltiple de 3 o de 7`);
} else {
    console.log(`${num} no és múltiple de 3 ni de 7`);
}
let x = 12;
let y = 55;

x >= 10 || x <= 50 ? console.log(x, "esta en el rang") : null
y >= 10 || y <= 50 ? console.log(x, "esta en el rang") : null

let xx = 5.99;
if (xx >= 10) {
    console.log("Excel·lent")
} else if (xx >= 8.99) {
    console.log("Notable")
} else if (xx >= 6.99) {
    console.log("Bé")
} else if (xx >= 5.99) {
    console.log("Suficient")
} else if (xx >= 4.99) {
    console.log("Suspes")
}

let num2 = 20;
bool = num2 % 3 === 0 || num2 % 7 === 0
switch (bool) {
    case true:
        console.log(`${num2} és múltiple de 3 o de 7`);
        break
    case false:
        console.log(`${num2} no és múltiple de 3 ni de 7`);
        break
}

function maxNumberSum(x) {
    let suma = 0;
    let n = 0;
    while (suma + (n + 1) <= x) {
        n += 1;
        suma += n;
    }
    return n;
}

let x5 = 15;
console.log("El máximo número n para x =", x5, "es:", maxNumberSum(x));

//6
function ex6(stringx) {
    let suma = 0;
    for (let i = 0; i < stringx.length; i++) {
        if (!isNaN(stringx[i])) {
            suma = suma + Number(stringx[i])
        }
    }
    console.log(suma)
}

ex6("patata12")

function ex7(n1, n2, n3) {
    const nums = [n1, n2, n3];
    nums.sort((a, b) => b - a);
    console.log(nums[0], nums[1], nums[2]);
}

ex7(3, 4, 5)

function ex8(enter) {
    for (let i = 0; i < enter; i++) {
        if (i % 2 === 0) {
            console.log(i + " Es parell")
        } else if (i % 2 !== 0) {
            console.log(i + " No es Parell")
        }
    }
}
ex8(3)
function ex9(){
    let asterisco ="*"
    let ast ="*"
    for(let i= 0;i <5;i++){
        console.log(asterisco)
        asterisco= asterisco+ ast
    }
}
ex9()
let suma =0;
let num1 =1;
do {
    if (num1 %3 ===0 || num1% 5===0){
        suma+=num1;
    }
    num1++;
}while (num1 <=1000)
console.log(suma)
