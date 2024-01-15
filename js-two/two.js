// Majburiy fan
/* const mFan1 = +prompt("Matimatekadan to'plagan balingiz");
const mFan2 = +prompt("Ona tilidan to'plagan balingiz");
const mFan3 = +prompt("Tarixdan to'plagan balingiz");
const mJAmiBall = mFan1 + mFan2 + mFan3;

// Asosiy fanlar
const aFan1 = prompt("1-blog, Faningizni kiriting");
const aFan2 = prompt("2-blog, Faningizni kiriting");
const blog1Ball = +prompt(`${aFan1}dan to'plagan balingiz`);
const blog2Ball = +prompt(`${aFan2}dan to'plagan balingiz`);
const aJamiBall = blog1Ball + blog2Ball;

const jamiBall = aJamiBall +mJAmiBall;

let maxBall = 189;
let budjetBall = 150;
let kontraktBall = 90;
let superKontraktBall = 70;

if (jamiBall >= budjetBall && jamiBall <= maxBall){
    console.log("Tabriklaymiz siz davlat granti asosida uqishga kirdingiz😇");
} else if (jamiBall >= kontraktBall && jamiBall < budjetBall){
    console.log("Tabriklaymiz siz shartnoma asosida uqishga kirdingiz😐");
} else if(jamiBall >= superKontraktBall && jamiBall < kontraktBall) {
    console.log("Tabriklaymiz siz  super kontraktga kirdingiz💸");
} else if(jamiBall < superKontraktBall) {
    console.log("Siz uqishga kira olmadingiz🙁");
} else {
    console.log("Nimadir xato");
}

console.log(jamiBall); */

// Masalalar
1.
//  Kolibri qushi bir daqiqada o'rtacha 240 marta nafas olsa, 1sekundda necha marta nafas oladi?

/* let kolibri = 240;

let javob = kolibri / 60;

console.log(javob); */

2.
// Sayohlar soatiga 65km tezlik bilan 2soat, keyin esa soatiga 70km tezlik bilan yana 1soat yurishdi. Ular jami qancha masofa yurishgan?

/* let km = 65;
let soat = 2;
let kmSoat = km * soat;
let yechim = kmSoat + 70;
console.log(yechim); */

3.
// Sutchi ayol har birida 3litrdan 3banka sut sotdi, Agar 1litr sut 5000 so'm bo'lsa, bankalardagi hamma sut qancha turadi?

/* let litr = 3;
let banka = 3;
let litrvaBanka = litr * banka;
let narx = 5e3;
let jamiSumma = litrvaBanka * narx ;
console.log(jamiSumma);*/

4.
// Fermer umumiy massasi 1828kg ikkita bir hil sigir va to'rta bir hil buqa sotdi. Bitta sigirning massasi 286 kg bo'lsa 1ta buqaning massasi qancha?

/*let umumiyMAssa = 1828;
let ikkitaSigir = 2 ;
let torttaSigir = 4 ;
let bittaSigirM = 286 ;
let ikkitaSigirningM = bittaSigirM * ikkitaSigir ;
let ikkitaSigirOgirligi = umumiyMAssa - ikkitaSigirningM ;
let bittaBuqanigM = ikkitaSigirOgirligi / torttaSigir;
console.log(bittaBuqanigM);*/



// level-2 

1.

// ism uzunligi

/* let ism = prompt("Ismingizni kiriting");

if (ism.length > 7){
    console.log("Ismingiz uzun");
} else if(ism.length < 7){
    console.log("Ismingiz qisqa");
} else {
    console.log("Iltimos ismingizni kiriting");
} */

2.

// ism familya

/*let ismUzunligi = prompt("Ismingizni kiriting");
let familyaUzunligi = prompt("Familyangizni kiritng");

if (ismUzunligi.length > familyaUzunligi.length ){
    console.log("Ismingiz uzun");
} else if (ismUzunligi.length < familyaUzunligi.length){
    console.log("Familyangiz uzun ekan");
} else if (ismUzunligi.length === familyaUzunligi.length){
    console.log("Ismingiz va Familyangiz teng");
} else {
    console.log("Iltimos Ism Familyangizni kiriting");
} */

3.

// hafta kunlari

/* let haftaKunlari = prompt("Hafta kunlarini raqamlarda kiriting 1dan 7gacha")

if (haftaKunlari == 1){
    console.log("Dushanba");
} else if (haftaKunlari == 2) {
    console.log("Seshanba");
} else if (haftaKunlari == 3) {
    console.log("Chorshanba");
} else if (haftaKunlari == 4) {
    console.log("Payshanba");
} else if (haftaKunlari == 5) {
    console.log("Juma");
} else if (haftaKunlari == 6) {
    console.log("Shanba");
} else if (haftaKunlari == 7) {
    console.log("Yakshanba");
} else {
    console.log("Unday kun yoq");
} */

4.

// switch
/* let raqam = +prompt("Hafta kunlarini raqamlarda kiriting 1dan 7gacha");

 switch (raqam){
    case 1:
        console.log("Dushanba");
    break
    case 2:
        console.log("Seshanba");
    break
    case 3:
        console.log("Chorshanba");
    break
    case 4:
        console.log("Payshanba");
    break
    case 5:
        console.log("Juma");
    break
    case 6:
        console.log("Shanba");
    break
    case 7:
        console.log("Yakshanba");
    break
    default:
        console.log("Unday kun yoq");
 } */



// Shartlar

1.
// Juft Toq
/* let son = +prompt("son kiriting")

if (son / 2){
    console.log("juft");
} else if (son / 3){
    console.log("toq");
} */

2.
// musbat manfiy

/*let num = +prompt("Son kiriting");

if (num > 0){
    console.log("musbat");
} else if(num < 0) {
    console.log("manfiy");
} else if(num == 0){
    console.log("0");
} else {
    console.log("son kiriting");
} */

3.
// a b va c sonlarni taqqoslash

/* let a = +prompt("a, son kiriting");
let b = +prompt("b, son kiriting");
let c = +prompt("c, son kiriting");

// a
if (a > b && a > c){
    console.log("a b va c dan katta");
} else if(a < b && a < c){
    console.log("a b va c dan kichik");
}
// b
if(b > a && b > c){
    console.log("b a va c dan katta");
} else if(b < a && b < c){
    console.log("b a va c dan kichik");
}

// c
if(c > a && c > b){
    console.log("c a va b dan katta");
} else if(c < a && c < b){
    console.log("c a va b dan kichik");
} */

4.

// a b c ni musbatligini tekshirish

/* let son1 = prompt("a son kiriting");
let son2 = prompt("b son kiriting");
let son3 = prompt("c son kiriting");
let son4 = prompt("d son kiriting");

if (son1 > 0 && son2 > 0 && son3 > 0 && son4 > 0){
    console.log("barchasi musbat");
} else{
    console.log("barchasi musbat emas");
} */

5.
// telefon nomer kodi

/* let phone = +prompt("Telefon raqamingizni boshlang'ich kodini kiriting");

if (phone == 99){
    console.log("Uzmobile");
} else if (phone == 97){
    console.log("Mobiuz");
} else if (phone == 98) {
    console.log("Perfectum");
} else if (phone == 90){
    console.log("Beeline");
} else{
    console.log("Kechirasiz bu raqam kompaniyasini bilmayman");
} */


6.
// musbatni 3ga oshirish, manfiyni 2ga kamaytirish

/* let musbatManfiy = +prompt("Son kiriting");

let three = 3;
let two = 2;
let uchniQushish = musbatManfiy + three;
let ikkigaKamaytirish = musbatManfiy - two;

if (musbatManfiy > 0 && musbatManfiy + three){
    console.log(uchniQushish);
} else if(musbatManfiy < 0 && musbatManfiy - two ) {
    console.log(ikkigaKamaytirish);
} else if(musbatManfiy == 0){
    console.log("0");
} else {
    console.log("son kiriting");
} */


// switch case masalalari

1.
// hafta kunlari

/*let haftaK = +prompt("Hafta kunlarini kiriting 1-7gacha")

switch (haftaK) {
    case 1:
        console.log("Dushanba");
    break
    case 2:
        console.log("Seshanba");
    break
    case 3:
        console.log("Chorshanba");
    break
    case 4:
        console.log("Payshanba");
    break
    case 5:
        console.log("Juma");
    break
    case 6:
        console.log("Shanba");
    break
    case 7:
        console.log("Yakshanba");
    break
    default:
        console.log("unday kun yoq");
} */

2.
// telefon raqam kodi

/* let telefon = +prompt("telefon raqamingizni boshlang'ich kodini kiriting")

switch (telefon) {
    case 99:
        console.log("Uzmobile");
    break
    case 98:
        console.log("Perfectum");
    break
    case 97:
        console.log("Mobiuz");
    break
    case 90:
        console.log("Beeline");
    break
    default:
        console.log("Kechirasiz bu raqam kompaniyasini bilmayman");
} */


3.

// baho

/* let baho = +prompt("1-5 gacha son yozing");

switch (baho) {
    case 1:
        console.log("Yomon");
    break
    case 2:
        console.log("Qoniqarsiz");
    break
    case 3:
        console.log("Qoniqarli");
    break
    case 4:
        console.log("Yaxshi");
    break
    case 5:
        console.log("Alo");
    break
    default:
        console.log("1-5 gacha son kiritng");
} */

4. 
// fasllarga tegishli oylar

/* let month = +prompt("oylarning sonini kiritng 1-12gacha")

switch (month) {
    case 1:
        console.log("Qish fasliga tegishli");
    break
    case 2:
        console.log("Qish fasliga tegishli");
    break
    case 3:
        console.log("Bahor fasliga tegishli");
    break
    case 4:
        console.log("Bahor fasliga tegishli");
    break
    case 5:
        console.log("Bahor fasliga tegishli");
    break
    case 6:
        console.log("Yoz fasliga tegishli");
    break
    case 7:
        console.log("Yoz fasliga tegishli");
    break
    case 8:
        console.log("Yoz fasliga tegishli");
    break
    case 9:
        console.log("Kuz fasliga tegishli");
    break
    case 10:
        console.log("Kuz fasliga tegishli");
    break
    case 11:
        console.log("Kuz fasliga tegishli");
    break
    case 12:
        console.log("Qish fasliga tegishli");
    break
    default:
        console.log("unday oy yoq");
} */