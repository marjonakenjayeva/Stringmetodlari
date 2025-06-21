let ism = prompt ("Ismingizni kiriting")
let kichkinaharf = ism.toLocaleLowerCase()

let harf = prompt("Birorta harf kiriting")

if(kichkinaharf.includes(harf)){
alert(`${ism} ismining ichida ${harf} harfi mavjud`)
}
else{
alert(`${ism} isminig ichida ${harf} harfi mavjud emas`)
}



let ism2 = prompt("Ismingizni kiriting")
let kichkinaharf2 = ism2.toLocaleLowerCase()

let harf2 = prompt("Birorta harf kiriting")

if(kichkinaharf2.includes(harf2)){
alert(`${ism2} ismingizni ichida ${harf2} harfi bor`)
}
else {
alert(`${ism2} isminig ichida ${harf2} harfi yoq`)   
}