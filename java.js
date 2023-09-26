// let savollar = [
//     {
//       savol: "lorem ispum ... (davom ettring)",
//       javoba: "dolor amet",
//       jabovb: "dolor sit amet",
//       javobc: "lorem ipsum",
//     },
//     {
//       savol: "lorem ispum ... (davom ettring)",
//       javoba: "dolor amet",
//       jabovb: "dolor sit amet",
//       javobc: "lorem ipsum",
//     },
//     {
//       savol: "lorem ispum ... (davom ettring)",
//       javoba: "dolor amet",
//       jabovb: "dolor sit amet",
//       javobc: "lorem ipsum",
//     },
//     {
//       savol: "lorem ispum ... (davom ettring)",
//       javoba: "dolor amet",
//       jabovb: "dolor sit amet",
//       javobc: "lorem ipsum",
//     },
//     {
//       savol: "lorem ispum ... (davom ettring)",
//       javoba: "dolor amet",
//       jabovb: "dolor sit amet",
//       javobc: "lorem ipsum",
//     },
//   ];
  
//   prompt("1.savol: gfhskfjhsdkjfs\na)fsdfasfsad\nb)fdsahfjskdahf\nc)fdsfsd");
//   prompt("2.savol: gfhskfjhsdkjfs\na)fsdfasfsad\nb)fdsahfjskdahf\nc)fdsfsd");
//   prompt("3.savol: gfhskfjhsdkjfs\na)fsdfasfsad\nb)fdsahfjskdahf\nc)fdsfsd");
  
//   alert("Siz savoldan 3 tasiga ");


let savollar = [
    {
      savol: " Uzbekiston nechta davlat bilan chigarodosh ?",
      variant: ["A. Amirika", "B. Tojikiston", "C. Yapomiya", "D. Rossiya fedratsiyasi "],
         javobi: "B"
     },
     {
        savol: "JAvaScriptda nechta o'zgaruvchi bor ?",
        variant: [ "A. 2 ta", "B. 4ta", "C. 3 ta", "D. 8 ta"],
        javobi: "D"
     },
     {
        savol: "htmlning vazifasi nima qiladi ?",
        variant: [ "A. sikjlitni vazifasini bajaradi", "B. funksiya vazifasini bajaradi", 
        "C. hech qanday vazifa bajarmaydi", "D. proikni boshlang'ich vazifasini tuzub beradi "],
        javobi: "A"
     },
     {
        savol: "8x3 ?",
        variant: [ "A. 13", "B. 24", "C. 16", "D. 12"],
        javobi: "B"
     },

 ]

 let togriJavoblar =0;
//  alert(" Variantni tanlashdan oldin 'Caps Lock ' tugmasini bosing.");


for (let i = 0; i < savollar.length; i++) {
    const userJavobi = prompt(savollar[i].savol + "\nVariant:\n " + savollar[i].variant.join("\n"));

    if (userJavobi ==  savollar[i].javobi) {
        togriJavoblar++;
    } 
        else if(userJavobi == "quit" ){
            break;
        }
        else if ( userJavobi== "next"){
            continue;
        }

        else if(userJavobi == ""||userJavobi == null){
            alert("Siz variant belgilamadingiz");
        }
 
}

alert("Siz " + savollar.length  + " ta savoldan " +  togriJavoblar+ " ta to'gri bajardingiz.");

 if ( togriJavoblar >= savollar.length-3) {
    alert(" Siz bu testni to'g'ri bajardingiz");
}
else if( togriJavoblar == savollar.length-5   < savollar.length-3){
    alert("  Siz  bu testni 50% bajardingiz.");
}
else{
    alert(" Siz bu testni bajara olmadingiz");
}