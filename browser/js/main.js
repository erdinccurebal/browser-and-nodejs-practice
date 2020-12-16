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
// OR
// a = {name: "Melike"};
// console.log(a.name);
// ! ----------------------------------------------
// var a=5;a=6;a=7;a=5,a=6;let b=15;var c=a+b;console.log(c); // ! 21


// TODO Htmle fonksiyonlarla hükmedelim.
// function changeHtml({ h1: _h1, p: _p }){
//  let h1 = document.querySelector("h1");
//  let p = document.querySelector("p");

//  h1.innerHTML = _h1;
//  p.innerHTML = _p;
// }
// changeHtml({h1: "Browser Javascript practice", p: "Voluptate suscipit facere laudantium?"});
// ! ----------------------------------------------

// TODO Eventlerimiz.
// const body = document.body;
// body.onload = complatePage;

// function complatePage() {
//     console.log("Sayfa yüklendi.");
// }
// ! ----------------------------------------------
/* const runTestButton = document.querySelector("#runTest");
runTestButton.onload = alerting;

function alerting () {
    alert("hi");
} */
// ! ----------------------------------------------
// const myInput = document.getElementById("testInput");
// myInput.onchange = myInputFunction;

// function myInputFunction (){
//     console.log("degisti");
// }
// ! ----------------------------------------------
// const runTest = document.getElementById("runTestButton");
// let a = 20;
// runTest.onmouseover = runTestFunction;

// function runTestFunction() {
//     setInterval(() => {
//         a -= 5;
//         runTest.style.padding = a + "px";
//     },1500);
//     setInterval(() => {
//         a += 5;
//         runTest.style.padding = a + "px";
//     },2000);
// }
// ! ----------------------------------------------
// const runTest = document.getElementById("runTestButton");
// runTest.onmouseover = buttonColorOver;
// runTest.onmousedown = buttonColorDown;
// runTest.onmouseout = buttonColorOut;

// runTest.style.padding = "10px";
// runTest.style.transition = "all ease 1s";

// function buttonColorDown() {
//     runTest.style.backgroundColor = "red";
// }
// function buttonColorOver() {
//     runTest.style.backgroundColor = "yellow";
// }
// function buttonColorOut() {
//     runTest.style.backgroundColor = "green";
// }
// ! ----------------------------------------------
// const body = document.body;
// body.style.height = "100vh";
// body.addEventListener("click", () => console.log("Tıklama"));


// TODO String
let a = new String("Hello World!");
console.log("new:",a);
console.log("anchor:",a.anchor("deneme")); // Bağlantı adresi.
console.log("big:",a.big()); // Büyük yazı.
console.log("blink:",a.blink()); // Yanıp sönen yazı.
console.log("bold:",a.bold()); // Kalın yazı.
console.log("charAt:",a.charAt(0)); // index'e göre secilen karakteri alır.
console.log("charCodeAt:",a.charCodeAt(0)); // index'e göre karakter kodunu getirir.
console.log("codePointAt:",a.codePointAt(0)); // UTF-16 index'e göre karakter kotunu verir.
console.log("concat:",a.concat("veri01","veri02","veri03")); // String ifadeleri birleştirir.
console.log("endsWith:",a.endsWith("!")); // String veri ne ile bittiğini kontrol eder ve true veya false döndürür.
console.log("fixed:", a.fixed()); // Html5 de desteklemez - Teletype yazı tipine cevirir.
console.log("fontcolor:",a.fontcolor("red")); // Yazı rengini ekler.
console.log("fontsize:",a.fontsize("55px")); // Yazı boyutunu ekler.

