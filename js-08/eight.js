// 1.Foydalanuvchidan nechta kino ko'rdingiz degan savol bering
// 2.Foydalanuvchi nechta kino ko'rganini kiritgandan keyin o'shancha marta 1 - ko'rgan kinongizni nomi? 2-ko'rgan kinongizni nomi ? 3 - ko'rgan kinongizni nomi? va hokozo shaklida so'ralsin.Va console.logga 1 - ko'rgan kinongizni shu 2-ko'rgan kinogiz shu deb chiqarsin
// 3.kinoning nomlarini bitta massivga qo'shing
// har bitta ko'rilgan kinoni nomini kiritgandan keyin so'ralsin raqam ko'rgan kinongiz unga nehca bal berasiz agar foydalanuvchi 5 va 4 oralig'ida bal bersa kino nomi ajoyib kinoga o'xshaydi, 4dan kam 2dan baland bo'lsa kino nomi. o'rtacha kinoga o'xshaydi, 2dan kam 0ga teng yoki 0dan baland bo'lsa kino nomi. yomon kinoga o'xshaydi unga shunaqa bal beribsiz


let nechtaKino = +prompt("Nechta kino ko'rgansiz? Faqat raqamda yozing !!!");

for (let i = 1; i <= nechtaKino; i++) {
    const element = prompt(`${i} - ko'rgan kinoning nomi`);
    console.log(`${i} - kinoni nomi ${element}`);


    let kinoniBaxosi = +prompt(`${i} - korgan kino 1-5 ball bering. Faqat raqamda yozing !!!`);



    if (kinoniBaxosi === 5) {
        console.log(`${i} - kino sizga yoqgan`);
    } else if (kinoniBaxosi === 4) {
        console.log(`${i} - kino yaxshiga oxshayabdi `);
    } else if (kinoniBaxosi === 3) {
        console.log(`${i} - kino yoqmaganga oxshayabdi `);
    } else if (kinoniBaxosi === 2) {
        console.log(`${i} - kino yaxshiga oxshamayapdi `);
    } else if (kinoniBaxosi === 1) {
        console.log(`${i} - kino sizga yoqmagan`);
    } else if (kinoniBaxosi <= 0) {
        console.log(`${i} - kino yaxshi emas ekan `);
    } else {
        alert("son kiriting deyildi")
    }

  
}


// for (let i = 1; i <= nechtaKino; i++ ) {
//     const element = prompt(`${i} - ko'rgan kinoning nomi`);
//     console.log(`${i} - kinoni nomi ${element}`);
// }



// for (let x = 1; i <= jamiKino; x++ ) {
//     const element = prompt(`${i} - jami kino`);
//     console.log(`${i} - kinoni nomi ${element}`);
// }


// if(nechtaKino !== Number){
//     console.log("son kiritilmadi");
// } else {
// }