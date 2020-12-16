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
// ! ----------------------------------------------
// var vvv = document.getElementById("pTest");
// vvv.addEventListener("click", () => {
//     console.log("hi");
// });


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
console.log("includes:", a.includes("World",3)); // String veride arama yapar ve bulduğunda, true veya false döner, aramada atlama yapabilir.
console.log("indexOf:", a.indexOf("World",3)); // String veride arama yapar ve verinin başlanğıcının index konumu verir ve atlama yapılabilir..
console.log("italics:", a.italics()); // İtalik bir html etiketi oluşturur.
console.log("lastIndexOf:", a.lastIndexOf("World")); // String veride sondan arama yapar ve verinin başlanğıcının index konumu verir ve atlama yapılabilir..
console.log("length:", a.length); // Verinin kaç karakterden olduğunu yazdırır.
console.log("link:", a.link("https://www.google.com/")); // A etiketinde link oluşturur, parametre olarak url alır.
console.log("localeCompare:", a.localeCompare("hello")); // Karşılaştırmalarda, parametre değeri ile string değerindeki benzeşme 100% olursa sıfır(0) değeri döndürür, Karşılaştırmalarda,parametre değeri ile string değeri arasında kısmi benzeşmeler olursa 1 değeri döndürür, Karşılaştırmalarda,parametre değeri dize nesnesinin değerine hiç benzeşmiyorsa -1 döndürür.
console.log("match:", a.match("Hello")); // Match fonksiyonu bize aranan kelimenin index konumunu ve aradığımız kelimeyi ve neleri aradığımızı verir ayrıyetten regexp de içinde uygulunabilir.
console.log("matchAll:", a.matchAll("Hello").next()); // Match fonksiyonun aynısıdır sadece promise tipinde döner.
console.log("normalize:", a.normalize()); // Veriyi normal bir string ifadeye veririr yapıcı fonksiyon halini bozar, bazı parametreler ile Unicode kodları dönüştürebilir.
console.log("padEnd:", a.padEnd(3, "Geeks")); // Varsayılan değer belirlenebilir ve verinin kaç karakteri yazdıracağıda belirlenebilir.
console.log("padStart:", a.padStart(3, "0")); // Varsayılan değer belirlenebilir ve verinin kaç kare kopyalanacağı belirlenebilir.
console.log("repeat:", a.repeat(5)); // String ifadeyi tekrarlar.
console.log("replace:", a.replace("Hello", "Kello")); // String veride ifadeyi bulur ve kendi atadığımız değer ile değiştirir ve regexp parametreleri kullanılabilir.
console.log("replaceAll:", a.replaceAll("Hello", "Zello")); // String veride ifadeyi bulur ve kendi atadığımız değer ile değiştirir ve regexp parametreleri kullanılabilir ve tüm oluşumlarda veya globalde aramalar gerçekleştirir.



