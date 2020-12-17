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
// let a = new String("   Hello World!   ");
// ! ----------------------------------------------
// console.log("new:",a);
// ! ----------------------------------------------
// console.log("anchor:",a.anchor("deneme")); // Bağlantı adresi.
// ! ----------------------------------------------
// console.log("big:",a.big()); // Büyük yazı.
// ! ----------------------------------------------
// console.log("blink:",a.blink()); // Yanıp sönen yazı. Html5 kaldırıldı.
// ! ----------------------------------------------
// console.log("bold:",a.bold()); // Kalın yazı.
// ! ----------------------------------------------
// console.log("charAt:",a.charAt(0)); // index'e göre secilen karakteri alır.
// ! ----------------------------------------------
// console.log("charCodeAt:",a.charCodeAt(0)); // index'e göre karakter kodunu getirir.
// ! ----------------------------------------------
// console.log("codePointAt:",a.codePointAt(0)); // UTF-16 index'e göre karakter kotunu verir.
// ! ----------------------------------------------
// console.log("concat:",a.concat("veri01","veri02","veri03")); // String ifadeleri birleştirir.
// ! ----------------------------------------------
// console.log("endsWith:",a.endsWith("!")); // String veri ne ile bittiğini kontrol eder ve true veya false döndürür.
// ! ----------------------------------------------
// console.log("fixed:", a.fixed()); // Html5 de desteklemez - Teletype yazı tipine cevirir.
// ! ----------------------------------------------
// console.log("fontcolor:",a.fontcolor("red")); // Yazı rengini ekler.
// ! ----------------------------------------------
// console.log("fontsize:",a.fontsize("55px")); // Yazı boyutunu ekler.
// ! ----------------------------------------------
// console.log("includes:", a.includes("World",3)); // String veride arama yapar ve bulduğunda, true veya false döner, aramada atlama yapabilir.
// ! ----------------------------------------------
// console.log("indexOf:", a.indexOf("World",3)); // String veride arama yapar ve verinin başlanğıcının index konumu verir ve atlama yapılabilir..
// ! ----------------------------------------------
// console.log("italics:", a.italics()); // İtalik bir html etiketi oluşturur.
// ! ----------------------------------------------
// console.log("lastIndexOf:", a.lastIndexOf("World")); // String veride sondan arama yapar ve verinin başlanğıcının index konumu verir ve atlama yapılabilir..
// ! ----------------------------------------------
// console.log("length:", a.length); // Verinin kaç karakterden olduğunu yazdırır.
// ! ----------------------------------------------
// console.log("link:", a.link("https://www.google.com/")); // A etiketinde link oluşturur, parametre olarak url alır.
// ! ----------------------------------------------
// console.log("localeCompare:", a.localeCompare("hello")); // Karşılaştırmalarda, parametre değeri ile string değerindeki benzeşme 100% olursa sıfır(0) değeri döndürür, Karşılaştırmalarda,parametre değeri ile string değeri arasında kısmi benzeşmeler olursa 1 değeri döndürür, Karşılaştırmalarda,parametre değeri dize nesnesinin değerine hiç benzeşmiyorsa -1 döndürür.
// ! ----------------------------------------------
// console.log("match:", a.match("Hello")); // Match fonksiyonu bize aranan kelimenin index konumunu ve aradığımız kelimeyi ve neleri aradığımızı verir ayrıyetten regexp de içinde uygulunabilir.
// ! ----------------------------------------------
// console.log("matchAll:", a.matchAll("Hello").next().value); // Match fonksiyonun aynısıdır sadece promise tipinde döner, ayrıntılı bilgi verir.
// ! ----------------------------------------------
// console.log("normalize:", a.normalize()); // Veriyi normal bir string ifadeye veririr yapıcı fonksiyon halini bozar, bazı parametreler ile Unicode kodları dönüştürebilir.
// ! ----------------------------------------------
// console.log("padEnd:", a.padEnd(3, "Geeks")); // Varsayılan değer belirlenebilir ve verinin kaç karakteri yazdıracağıda belirlenebilir.
// ! ----------------------------------------------
// console.log("padStart:", a.padStart(3, "0")); // Varsayılan değer belirlenebilir ve verinin kaç kare kopyalanacağı belirlenebilir.
// ! ----------------------------------------------
// console.log("repeat:", a.repeat(5)); // String ifadeyi tekrarlar.
// ! ----------------------------------------------
// console.log("replace:", a.replace("Hello", "Kello")); // String veride ifadeyi bulur ve kendi atadığımız değer ile değiştirir ve regexp parametreleri kullanılabilir, Tek bir ifade değiştirir.
// ! ----------------------------------------------
// console.log("replaceAll:", a.replaceAll("Hello", "Zello")); // String veride ifadeyi bulur ve kendi atadığımız değer ile değiştirir ve regexp parametreleri kullanılabilir ve tüm oluşumlarda veya globalde aramalar gerçekleştirir, Bütün ifaleri değiştirir.
// ! ----------------------------------------------
// console.log("search:", a.search(/hello/i)); // String de arama yapar, -1 ve 0 dönmektedir, -1 bulamadığını 1 ise bulduğunu gösterir, bu fonksiyonda regexp kullanılabilir.
// ! ----------------------------------------------
// console.log("slice:", a.slice(2,5)); // Metinde kesme işlemi yapar 3 ile 5 arasını al demekdir. geriye bulduğu ifadeyi döner. Negatif parametre kabul eder.
// ! ----------------------------------------------
// console.log("small:", a.small(2,4)); // Html'de small etiketi oluşturur.
// ! ----------------------------------------------
// console.log("split:", a.split(" ",3)); // Belirlenen ifade ile metini parçalar, ikinci parametrede ise kaç tane veri geleceğinin limiti belirlenebilir veya kaç ifadenin parçalanacağı.
// ! ----------------------------------------------
// console.log("startsWith:", a.startsWith("World",6)); // String ifadenin ne ile başladığını kontrol eder ve true veya false geri döner ve atlama yapılabilir.
// ! ----------------------------------------------
// console.log("strike:", a.strike()); // Html5 de desteği yoktur, Html de strike etiketi oluşturur.
// ! ----------------------------------------------
// console.log("sub:", a.sub()); // Html de sub etiketi oluşturur, üslü sayılar için de kullanılabilir.
// ! ----------------------------------------------
// console.log("substr:", a.substr(2,5)); // Belirtilen parametrelere göre metinin arasını alır, 2 başlangıç, 5 ise 2 den sonraki alıcan karakteri belirler.
// ! ----------------------------------------------
// console.log("substring:", a.substring(2,5)); // Metinin arasını alır ve index numarasına göre 2,5 arasını al demektir.
// ! ----------------------------------------------
// console.log("substring:", a.substring(2,5)); // Metinin arasını alır ve index numarasına göre 2,5 arasını al demektir.
// ! ----------------------------------------------
// console.log("sup:", a.sup()); // Html de sup etiketi oluşturur, sayının tabanı olarakda ifade edilir.
// ! ----------------------------------------------
// console.log("toLocaleLowerCase:", a.toLocaleLowerCase("en-US")); //  Dil karakterlerine göre düzeltme yaparak yapıyı kücültür.
// ! ----------------------------------------------
// console.log("toLocaleUpperCase:", a.toLocaleUpperCase("en-US")); //  Dil karakterlerine göre düzeltme yaparak yapıyı büyültür.
// ! ----------------------------------------------
// console.log("toLowerCase:", a.toLowerCase()); //  Bütün string veriyi küçük yapar.
// ! ----------------------------------------------
// console.log("toString:", a.toString()); //  İfadeyi string türüne cevirir.
// ! ----------------------------------------------
// console.log("toUpperCase:", a.toUpperCase()); //  Bütün string veriyi büyük yapar.
// ! ----------------------------------------------
// console.log("trim:", a.trim()); //  Sağındaki solundaki boslukları siler.
// ! ----------------------------------------------
// console.log("trimEnd:", a.trimEnd()); //  Sonundaki boslukları siler.
// ! ----------------------------------------------
// console.log("trinLeft:", a.trimLeft()); //  Solundaki boşlukları siler.
// ! ----------------------------------------------
// console.log("trimRight:", a.trimRight()); //  Sağındaki boşlukları siler.
// ! ----------------------------------------------
// console.log("trimStart:", a.trimStart()); //  Başındaki boşlukları siler.
// ! ----------------------------------------------
// console.log("valueOf:", a.valueOf()); //  İçindeki veriyi döner.


// TODO Sayılar.
// const num = new Number(1563);
// ! ----------------------------------------------
// const numValue = num.valueOf();
// ! ----------------------------------------------
// const numString = "498.4489.8489";
// ! ----------------------------------------------
// console.log("new:",num);
// ! ----------------------------------------------
// console.log("toExponential:",+num.toExponential(1)); // Gelen veriyi parametre göre siler ve kaç basamaklı sayı girildiyse, ondalık olarak tanımlar, Sayıyı yukarıya yuvarlar.
// ! ----------------------------------------------
// console.log("fixed:", num.toFixed(1)); // Parametreye göre virgülden sonra 0 atar.
// ! ----------------------------------------------
// console.log("toLocaleString:", num.toLocaleString("TR")); // Sayıları virgül ile arıyır ve yabancı karakterlerdeki sayıyı dile göre cevirir.
// ! ----------------------------------------------
// console.log("toPrecision:", +num.toPrecision(2)); // Gelen veriyi parametre göre siler ve kaç basamaklı sayı girildiyse, ondalık olarak tanımlar, Sayıyı aşağıya yuvarlar.
// ! ----------------------------------------------
// console.log("toString:", num.toString(16)); // String veriye cevirir. Aldığı parametre göre sayı sistemini değiştirir. 16 lık sayı sistemine cevirildi.
// ! ----------------------------------------------
// console.log("valueOf:", num.valueOf()); // Veriyi yazdırır, kendi türüne bağlı.
// ! ----------------------------------------------
// console.log("isFinite:", Number.isFinite(numValue)); // Eğer argümanın değeri NaN, pozitif sonsuz veya negatif sonsuz ise, metod false döndürür; değilse, true döndürür.
// ! ----------------------------------------------
// console.log("isInteger:", Number.isInteger(numValue)); // Verinin sayı olup olmadığını kontrol eder.
// ! ----------------------------------------------
// console.log("isNaN:", Number.isNaN(numValue)); // Verinin hatalı bir veri olup olmadığını kontrol eder.
// ! ----------------------------------------------
// console.log("isSafeInteger:", Number.isSafeInteger(undefined)); // Tam sayı olması gerekir, verinin hatalı olup olmadığını kontrol eder. Sonsuz olup olmadığını kontrol eder. Verinin olup olmadığını.
// ! ----------------------------------------------
// console.log("parseFloat:", Number.parseFloat(numString)); // String veriyi number veriye cevirir ve virgülden sonrasını silmez.
// ! ----------------------------------------------
// console.log("parseInt:", Number.parseInt(numString)); // String veriyi number veriye cevirir ve virgülden sonrasını siler.


// TODO Dizinler
// const arr01 = new Array(3, 3, 3, 4, 4, 4);
// const arr02 = new Array("merhaba", "nasılsın", "burnun", "merhabas");
// const arr03 = new Array(5, { name: "Erdinç" }, "stringim", ["4", 5]);
// ! ----------------------------------------------
// console.log("concat:",arr01.concat(arr02,arr03)); // Dizinleri birleştirir.
// ! ----------------------------------------------
// console.log("copyWithin:", arr01.copyWithin((3,1))); // Dizinin içersindeki veriyi kopyalar ve dizinin icerisinde bir yeri değiştirelir.
// ! ----------------------------------------------
// console.log("entries:", arr01.entries().next().value); // Veriyi ayrıntılı gösterir. Promise tipinde dönüş sağlar.
// ! ----------------------------------------------
// console.log("every:", arr01.every(item => item <= 5)); // Dizinin içersindeki verileri tek tek kontrol eder ve hepsinin bizim verdiğimiz koşula göre doğru olması beklenir, true veya false döner.
// ! ----------------------------------------------
// console.log("fill:", arr01.fill(5,1,3)); // İçindeki verileri bizim verdiğimiz değere göre arasını değiştirir, birinci parametre yeni değer, ikinici parametre başlangıç index'si, üçüncü parametre ise bitiş yeridir.
// ! ----------------------------------------------
// console.log("filter:", arr01.filter((item,index,full) => {
//     console.log("FULL:",full);
//     console.log("INDEX:",index);
//    return item == 5;
// })); // Dizinin içindeki değerleri filtreler. Birinci iç parametre değeri saydırır, ikinci iç parametrede dönüş indexisini alır, üçüncü parametrede ise bize baz aldığımız veriyi verir.
// ! ----------------------------------------------
//console.log("find:", arr02.find(item => item == "merhaba")); // Dizinde arama yapar ve bize bulup veriyi geri döner, dikkatinizi cekerim index döndürmüyor ve bir tane veri getiriyor. Birdan fazla verinin gelmesini istiyorsanız filter methodunu kullanabilirsiniz.
// ! ----------------------------------------------
// console.log("findIndex:", arr02.findIndex(item => item == "merhaba")); // Dizinde arama yapar ve bize bulup index konumunu döner, bir tane veri getiriyor.
// ! ----------------------------------------------
// console.log("flat:",arr02.flat(6)); // İç içe acılan dizinleri tek dizin haline getirir ve aldığı parametre ise derinliğidir.
// ! ----------------------------------------------
// console.log("flatMap:",arr01.flatMap(item => [ item * 2 ])); // Veriyi değiştirir ve iç içe dizinleri birleştirir.
// ! ----------------------------------------------
// arr02.forEach(item => console.log(item)); // Dizinin içersindeki veriyi, dizin kadar döner.
// ! ----------------------------------------------
// console.log("includes:",arr02.includes("merhabas",2)); // Regexp çalıştırmaz, Dizinin içerisinde arama yapar, ikinci parametrede ise atlama yapabilirsiniz ve bize true veya false dönüş yapar.
// ! ----------------------------------------------
// console.log("indexOf:",arr02.indexOf("merhabas",2)); // Regexp çalıştırmaz, Dizinin içerisinde arama yapar, ikinci parametrede ise atlama yapabilirsiniz ve bize index konumu verir.
// ! ----------------------------------------------
// console.log("join:",arr02.join("/")); // Dizindeki verileri birleştirir ve string ifade yapar, aldığı parametre ise birleştirmeden önce arasına konulanacak veridir.
// ! ----------------------------------------------
// console.log("lastIndexOf:",arr02.lastIndexOf("merhabas",2)); // Regexp çalıştırmaz, Dizinin içerisinde sondan arama yapar, ikinci parametrede ise atlama yapabilirsiniz ve bize index konumu verir.
// ! ----------------------------------------------
// console.log("length:",arr02.length); // Değer sayısını verir.
// ! ----------------------------------------------
// console.log("map:",arr01.map((item, index) => {
//     let a = item += index;
//     return "PARAM"+a;
// })); // Verileri tek tek döner ve değiştirme yapabilirsiniz.
// ! ----------------------------------------------
// console.log("pop:",arr02.pop()); // Dizinin sondaki verisini alır ve onu döner.
// console.log("Şuanki veri:",arr02); // Dizinin anlık halidir, içinden sondaki veri alınmıştır.
// ! ----------------------------------------------
// console.log("push:",arr02.push("50","selam",5)); // Dizinin sonuna veri atar ve birdan fazla parametre alabilir ve geriye dizinin lenght'ini döner.
// console.log("Şuanki veri:",arr02); // Dizinin anlık halidir, içine sondan veri eklenmiştir.
// ! ----------------------------------------------
// console.log("reduce:", arr01.reduce((a,b) => a+b)); // Dizinin içerisindeki ilk değer ile diğer değerleri toplar veya başka işlem yapılabilir.
// ! ---------------------------------------------
// console.log("reduceRight:", arr01.reduceRight((a,b) => a+b)); // Dizinin içerisindeki son değer ile diğer değerleri toplar veya başka işlem yapılabilir.
// ! ---------------------------------------------
// console.log("reverse:", arr01.reverse()); // Dizini tersten döndürür.
// ! ---------------------------------------------
// console.log("shift:", arr01.shift()); // Dizinin başından veriyi silir ve sildiği veriyi geri döner.
// console.log("Şuanki veri:",arr01); // Dizinin anlık halidir, dizinin başından veri silinmiştir.
// ! ---------------------------------------------
// console.log("slice:", arr01.slice(2,4)); // Dizinin içerinden keser, 2 ile 4 index arasını kesmiştir.
// ! ---------------------------------------------
// console.log("some:", arr01.some(item => item == 6)); // Dizinin içersinden kriterlere uygun verinin olup olmadığını kontrol eder ve true veya false dönüş yapar.
// ! ---------------------------------------------
// console.log("sort:", arr01.sort((a,b) => a - b)); // Dizinin içersinde verileri sıralar.
// ! ---------------------------------------------
// console.log("splice:", arr01.splice(1,2,"hello")); // Dizinin içersinde belirtilen parametre aralığını siler ve kalanları verir, 3 parametreden sonra args alır ve istenilen verileri içine eklenebilir. ana array içine ekler return olarakda silinenleri verir.
// console.log(arr01);
// ! ---------------------------------------------
// console.log("toLocaleString:", arr01.toLocaleString("TR", { style: "currency", currency: "YTL" })); // Dizin verisini dile cevirir ve özellik olarakda para birimi eklenilebilir. 
// ! ---------------------------------------------
// console.log("toString:", arr01.toString()); // Veriyi virgüllü halde string türüne cevirir.
// ! ---------------------------------------------
// console.log("unshift:", arr01.unshift(6)); // Dizinin başına veri ekler, birden fazla parametre alabilir.
// console.log("Şuanki veri:",arr01); // Dizinin anlık halidir, içine başından veri eklenmiştir.
// ! ---------------------------------------------
// console.log("values:", arr01.values().next().value); // Veriyi next ile tek tek çıkartır.


// Boolean
// const x = new Boolean(true);
// console.log("new:",x);
// ! ---------------------------------------------
// console.log("toString:",x.toString()); // Veriyi string tipine cevirir.
// ! ---------------------------------------------
// console.log("valueOf:",x.valueOf()); // Veriyi cıkartır.
// ! ---------------------------------------------
// console.log(Boolean(4 > 5)); // Verinin doğru olup olmadığını kontrol eder. NaN gelen veriyi false cevirir, 0 = false, -0 = false, "" = false; undefined = false, false = false, 2 tane yapıcı fonksiyon aynı olsada false döndürür.

// TODO Ecmascript6 eğerler.
// const ifTest01 = true;
// const ifTest02 = false;
// ! ---------------------------------------------
// if (ifTest) {
//     console.log("if")
// } else if (ifTest02) {
//     console.log("else if")
// } else {
//     console.log("else")
// }
// ! ---------------------------------------------
// if (ifTest01) {
//     console.log("if")
// } else if(ifTest02) {
//     console.log("else if")
// }
// ! ---------------------------------------------
// if (ifTest01) {
//     console.log("if")
// }
// if (ifTest02) {
//     console.log("if")
// }
// ! ---------------------------------------------
// if (true || false) console.log("true"); else if ("bib") console.log("bib"); else console.log("else");
// ! ---------------------------------------------
// (true) && console.log("his");
// (true) && console.log("hihi");
// ! ---------------------------------------------
// let x = "aaa";
// x == "aaa" ? console.log("abc"): x == "bbb" ? console.log("bbb") : x == "ccc" ? console.log("ccc") : console.log("else");
// ! ---------------------------------------------
// let x = 0;
// switch (x) {
//     case 0:
//         console.log(0);
//         break;
//     case 1: {
//         console.log(0);
//         break;
//     }   
//     default:
//         console.log("else");
//         break;
// }


// TODO For and ForEach
/* for(let i = 0;i <= 10;i++){
    console.log(i);
} */
// ! ---------------------------------------------
// for(let i = 0;i <= 10;i++) console.log(i);
// ! ---------------------------------------------
// const x = ["bursa","istanbul","izmir","amasya"];
// for(let i = 0; i < x.length; i++){
//     console.log(x[i]);
// }
// ! ---------------------------------------------
// const x = ["bursa","istanbul","izmir","amasya"];
// for(c in x){
//     console.log("INDEX: "+ c + " | " + "VALUE: " + x[c]);
// }
// ! ---------------------------------------------
// const x = ["bursa","istanbul","izmir","amasya"];
// x.forEach((item, index, full) => console.log(full[index] + " " + index));
// ! ---------------------------------------------
// const x = ["bursa","istanbul","izmir","amasya"];
// x.forEach((item) => console.log(item));
// ! ---------------------------------------------
// const x = ["bursa","istanbul","izmir","amasya"];
// for(let i = 0; i < x.length; i++){
//     if (i == 2) continue;
//     if (i == 3) break;
//     console.log(x[i]);
// }
// ! ---------------------------------------------