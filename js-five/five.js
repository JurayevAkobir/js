// ! 1.
// ? 1.ism

/*let ism = prompt("ismingizni kiriting");

if (ism.length >= 7) {
    console.log("ismingiz uzun ekan");
} else if (ism.length <= 7){
    console.log("ismingiz qisqa ekan");
} else {
    console.log("ismingizni kiritmadingiz");
} */


// ? 2.ism familya

/* let ism = prompt("Ismingizni kiriting");
let famliya = prompt("Famlyaingizni kiriting");

if (ism.length > famliya.length) {
    console.log("ismingiz uzun ekan");
} else if (ism.length < famliya.length){
    console.log("familyangiz uzun ekan");
} else if (ism.length == famliya.length){
    console.log("familyangiz va ismingiz teng ekan");
} */


//? 3. hafta kunlari

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


// ? 4.hafta kunlari switch case

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



// ! 3.

// ? 1. juft va toq
/*let son = +prompt("son kiriting");
let juft = 2;

if (son / 2){
    console.log("juft");
} else if (son / 2 ) {
    console.log("toq");
}*/

// ! 2. musbat va manfiy 
/* let son = +prompt("son kiriting");

if (son > 0 ){
    console.log("musbat");
} else if (son < 0 ) {
    console.log("manfiy");
} else if (son == 0){
    console.log("0");
} else {
    console.log("son kiriting");
} */

// ? 3. a, b va c katta kichkligini aniqlash
/* let a = +prompt("a, son kiriting");
let b = +prompt("b, son kiriting");
let c = +prompt("c, son kiriting");

if (a > b && a > c){
    console.log("a son b va c dan katta");
} else if (b > a && b > c){
    console.log("b son a va c dan katta");
} else if (c > a && c > b){
    console.log("c son a va b dan katta");
} else {
    console.log("son kiritilmadi");
} */

// ? 4. a, b va c oralig'i
/* let a = +prompt("a, son kiriting");
let b = +prompt("b, son kiriting");
let c = +prompt("c, son kiriting");

if (a > b && a < c){
    console.log("a son b va c lar orasida");
} else if (b > a && b < c){
    console.log("b son a va c lar orasdia");
} else if (c > a && c < b){
    console.log("c son a va b lar orasida");
} else {
    console.log("son kiritilmadi");
} */

// ! 5. a va b sonlarni ikkalasi ham toqligi 
/*let son = +prompt("son kiriting");
let juft = 2;

if (son / 2){
    console.log("juft");
} else if (son / 2 ) {
    console.log("toq");
}*/

// ? 6. a, b, c, d, barchasini musbatligini tekshirish 
/*let a = +prompt("a, son kiriting");
let b = +prompt("b, son kiriting");
let c = +prompt("c, son kiriting");
let d = +prompt("d, son kiriting");

if (a > 0 && b > 0 && c > 0 && d > 0){
    console.log("barchasi musbat");
} else if (a < 0 && b < 0 && c < 0 && d < 0) {
    console.log("barchasi manfiy");
} else {
    console.log("son kiriting");
} */

// ? 7. a va b kamida ikkitasi musbatligini aniqlash
/* let a = +prompt("a, son kiriting");
let b = +prompt("b, son kiriting");
let c = +prompt("c, son kiriting");

if (a > 0 && b > 0 && c < 0 ){
    console.log("ikkitasi musbat");
} else if (a > 0 && c > 0 && b < 0  ){
    console.log("ikkitasi musbat");
} else if (b > 0 && c > 0 && a < 0 ){
    console.log("c son a va b dan katta");
} else {
    console.log("son kiritilmadi");
} */

//? 8. hafta kunlari

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

// ? 9. Telefon raqam kodlari

/* let raqam = +prompt("telefon raqamingizni boshlang'ich 2ta kodidni yozing")

if (raqam == 99) {
    console.log("Uzmobile");
} else if (raqam == 98){
    console.log("Perfectum");
} else if (raqam == 90){
    console.log("Beeline");
} else {
    console.log("uzur bu raqam kompanyasini bilmayman");
} */

// ? 10. Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring, manfiy bo'lsa unda 2ga kamaytiring.

/*let son = +prompt("son kiriting")
let musbatSon = 3;
let manfitSon = 2;
let uchgaOshirish = son + musbatSon;
let ikkigaKamaytirish = son - manfitSon;

if (son > 0) {
    console.log(uchgaOshirish);
} else if (son < 0) {
    console.log(ikkigaKamaytirish);
} else {
    console.log("son kiritilmadi");
} */

// ? 11. a, b va c katta kichkligini aniqlash
/*let a = +prompt("a, son kiriting");
let b = +prompt("b, son kiriting");

if (a > b){
    console.log("a son katta");
} else if (a < b){
    console.log("b son katta");
} else {
    console.log("son kiritilmadi");
}*/

// ? 12. a, b va c sonlardan eng kattasini aniqlash
/*let a = +prompt("a, son kiriting");
let b = +prompt("b, son kiriting");
let c = +prompt("c, son kiriting");

if (a > b && a > c){
    console.log("a son eng katta");
} else if (b > a && b > c){
    console.log("b son eng katta");
} else if (c > a && c > b){
    console.log("c son eng katta");
} else {
    console.log("son kiritilmadi");
} */

// ? 13. a, b va c sonlardan kichigini aniqlash
/*let a = +prompt("a, son kiriting");
let b = +prompt("b, son kiriting");
let c = +prompt("c, son kiriting");

if (a < b && a < c){
    console.log("a son eng kichik");
} else if (b < a && b < c){
    console.log("b son eng kichik");
} else if (c < a && c < b){
    console.log("c son eng kichik");
} else {
    console.log("son kiritilmadi");
}*/

//  ! 4.

// ? 1.hafta kunlari switch case

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

// ? 2.hafta kunlari switch case

/* let telRaqam = +prompt("telefon raqamingizni boshlang'ich 2ta kodidni yozing")

switch (telRaqam) {
    case 99:
        console.log("Uzmobile");
        break;
    case 98:
        console.log("Perfectum");
        break;
    case 90:
        console.log("Beeline");
        break;
    default:
        console.log("uzur bu raqam kompanyasini bilmayman");
        break;
} */


// ? 3. Baholash tizimi 1-5-gacha

/*let baholash = +prompt("1-5 gacha son kiriting")

switch (baholash) {
    case 1:
        console.log("yomon");
        break;
    case 2:
        console.log("qoniqarsiz");
        break;
    case 3:
        console.log("qoniqarli");
        break;
    case 4:
        console.log("yaxshi");
        break;
    case 5:
        console.log("a'lo");
        break;
    default:
        console.log("1-5 gacha son kiritilmadi");
        break;
}*/

// ? 4. Fasllar

/*let seasons = +prompt("12ta oylarni raqam sifatida kiriting")

switch (seasons) {
    case 1:
        console.log("Yanvar, Qish fasli");
        break;
    case 2:
        console.log("Fevral, Qish fasli");
        break;
    case 3:
        console.log("Mart, Bahor fasli");
        break;
    case 4:
        console.log("Aprel, Bahor fasli");
        break;
    case 5:
        console.log("May, Bahor fasli");
        break;
    case 6:
        console.log("Iyul, Yoz fasli");
        break;
    case 7:
        console.log("Iyun, Yoz fasli");
        break;
    case 8:
        console.log("Avgust, Yoz fasli");
        break;
    case 9:
        console.log("Sentabr, Kuz fasli");
        break;
    case 10:
        console.log("Oktabr, Kuz fasli");
        break;
    case 11:
        console.log("Noyabr, Kuz fasli");
        break;
    case 12:
        console.log("Dekabr, Qish fasli");
        break;
    default:
        console.log("12ta oylardan kiritilmadi");
        break;
}*/