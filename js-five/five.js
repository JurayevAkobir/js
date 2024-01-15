// ! 1.
1.// ism

/*let ism = prompt("ismingizni kiriting");

if (ism.length >= 7) {
    console.log("ismingiz uzun ekan");
} else if (ism.length <= 7){
    console.log("ismingiz qisqa ekan");
} else {
    console.log("ismingizni kiritmadingiz");
} */


2.// ism familya

/* let ism = prompt("Ismingizni kiriting");
let famliya = prompt("Famlyaingizni kiriting");

if (ism.length > famliya.length) {
    console.log("ismingiz uzun ekan");
} else if (ism.length < famliya.length){
    console.log("familyangiz uzun ekan");
} else if (ism.length == famliya.length){
    console.log("familyangiz va ismingiz teng ekan");
} */


3.// hafta kunlari

/* let week = +prompt("hafta kunlarning sonini kiriting");

if (week == 1) {
    console.log("dushanba");
} else if (week == 2) {
    console.log("seshanba");
} else if (week == 3) {
    console.log("chorshanba");
} else if (week == 4) {
    console.log("payshanba");
} else if (week == 5) {
    console.log("juma");
} else if (week == 6) {
    console.log("shanba");
} else if (week == 7) {
    console.log("yakshanba");
} else {
    console.log("uday hafta kuni yoq");
} */


4.// hafta kunlari switch case

/* let hafta = +prompt("hafta kunlarning sonini kiriting")

switch (hafta) {
    case 1:
        console.log("dushanba");
        break;
    case 2:
        console.log("seshanba");
        break;
    case 3:
        console.log("chorshanba");
        break;
    case 4:
        console.log("payshanba");
        break;
    case 5:
        console.log("juma");
        break;
    case 6:
        console.log("shanba");
        break;
    default:
        console.log("unday hafta kuni yuq");
        break;
} */

// ! 2.

// ? 1. - Kolibri qushi

/* let nafas = 240;
let answer = nafas / 60;

console.log(answer); */

// ? 2. - Sayohlar soatiga 65km tezlik bilan 2soat, keyin esa soatiga 70km tezlik bilan yana 1soat yurishdi. Ular jami qancha masofa yurishgan?

/* let km = 65;
let hour = 2;

let kmHour = km * hour;
let answer = kmHour + 70;

console.log(answer); */

// ? 3. - Sutchi ayol har birida 3litrdan 3banka sut sotdi, Agar 1litr sut 5000 so'm bo'lsa, bankalardagi hamma sut qancha turadi?

/* let banka = 3;
let litr = 3;
let bankavaSut = banka * litr;
let narxi = 5e3;
let hammaSut = bankavaSut * narxi;
console.log(hammaSut); */

// ? 4. - Fermer umumiy massasi 1828kg ikkita bir hil sigir va to'rta bir hil buqa sotdi. Bitta sigirning massasi 286 kg bo'lsa 1ta buqaning massasi qancha?


/*let umumiyMAssa = 1828;
let ikkitaSigir = 2 ;
let torttaSigir = 4 ;
let bittaSigirM = 286 ;
let ikkitaSigirningM = bittaSigirM * ikkitaSigir ;
let ikkitaSigirOgirligi = umumiyMAssa - ikkitaSigirningM ;
let bittaBuqanigM = ikkitaSigirOgirligi / torttaSigir;
console.log(bittaBuqanigM);*/