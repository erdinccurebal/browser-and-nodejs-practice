// TODO Body içerisinden etiketleri ve id'leri yakalayalım.
// document.querySelector("#test").innerHTML = "<h1></h1><p></p><small></small>";
// document.querySelector("#test>h1").innerHTML = "Practice";
// document.querySelector("#test>p").innerHTML = "Lorem ipsun";
// document.querySelector("#test>small").innerHTML = "smalcuk";
// document.querySelectorAll("p").forEach(e => e.style.fontSize = "35px");

// TODO Body bir içerik yazdır.
// document.write("Hello World");
// document.write("Hello World");
// document.write("Hello World");
// document.write("Hello World");

// TODO Uyarı at.
// alert("Hello");

// TODO Yazdırma alanını acar.
// window.print();

// TODO Değişkenler ve Sabitler
// var a ,b,c;
// a = "Jack";
// var a = "Hi"; // ! Burada hata almayız.
// console.log(a);
// ! ----------------------------------------------
// let a,b,c;
// a = "Hi";
// let a = "hi"; // ! Burada hata alırız.
// console.log(a);
// ! ----------------------------------------------
// let a;
// a = 5;
// {
//     let a = 6;
//     console.log(a);
// }
// console.log(a);
// ! ----------------------------------------------
// var a;
// var a = 5;
// a = 6;
// {
//     var a = 7;
//     console.log(a);
// }
// console.log(a);
// ! ----------------------------------------------
// const a = 5;
// {
//     const a = 7;
//     console.log(a);
// }
// console.log(a);
// ! ----------------------------------------------
// let a = "Merhaba";
// ({ name: a } = {name: "Erdinç"});
// console.log(a);
// // OR
// a = {name: "Melike"};
// console.log(a.name);
// ! ----------------------------------------------
// var a=5;a=6;a=7;a=5,a=6;let b=15;var c=a+b;console.log(c); // ! 21


// TODO Htmle fonksiyonlarla hükmedelim.
function changeHtml(){
 document.querySelector("h1");
 document.querySelector("p");
}

changeHtml();