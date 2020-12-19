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


// TODO Boolean
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

// TODO Tip Kontrol
// console.log(typeof "John"); // Returns "string"
// ! ---------------------------------------------
// console.log(typeof 3.14); // Returns "number"
// ! ---------------------------------------------
// console.log(typeof NaN); // Returns "number"
// ! ---------------------------------------------
// console.log(typeof false); // Returns "boolean"
// ! ---------------------------------------------
// console.log(typeof [1,2,3,4]); // Returns "object"
// ! ---------------------------------------------
// console.log(typeof {name:"John", age:34}); // Returns "object"
// ! ---------------------------------------------
// console.log(typeof new Date()); // Returns "object"
// ! ---------------------------------------------
// console.log(typeof function () {}); // Returns "function"
// ! ---------------------------------------------
// console.log(typeof undefined); // Returns "undefined" *
// ! ---------------------------------------------
// console.log(typeof null ); // Returns "object"

// TODO Promise söz vermek, then catch
// const users = [
//     {id: 1, name: "Erdinç", surname: "Cürebal"},
//     {id: 2, name: "Nurcan", surname: "Cürebal"},
//     {id: 3, name: "Melike", surname: "Atasoy"},
//     {id: 4, name: "Veli", surname: "Yavuz"},
// ];

// const promiseData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (users == NaN || typeof users == "function" || typeof users == "string" || !(users[0])) {
//             reject(new Error("Hatalı Parametre!!!"));
//         } else {
//             resolve(users);
//         } 
//     },2000); 
// });

// promiseData.then(data => {
//     console.log(data);
//     return data[1];
// }).then(data => {
//     console.log(data);
// });


// TODO Hatalar
// try {
//     console.log("BAŞARILI :" , testingFN(3));
// } catch (error) {
//     console.error("HATA: " + error);
// } finally {
//     console.log("Try Catch Çalıştı.");
// }

// function testingFN (number) {
//     if (number < 5) throw "5 den kücük olamaz !!!";
//     if (number > 10) throw "10 dan büyük olamaz !!!";
//     if (typeof number == "string") throw "Veriyi string gönderemezsiniz!!!.";
//     if (typeof number == "undefined") throw "Veri boş olamaz";
//     return number;
//}
// ! ---------------------------------------------
//TODO Objeler
// * configurable => False ise silinemez ve değiştirilemez.
// * enumerable => False ise for/in özelliğini kapatır.
// * value => Girilecek ana değer.
// * writable => Değer sabit olur , değiştirilemez.
// const obje01 = { id: 1, name: "Erdinç", surname: "Cürebal" };
// const obje02 = { id: 2, name: "Nurcan", surname: "Cürebal" };
// const obje03 = { age: 29 };

// const newObje = new Object(obje01);
// console.log("new:", newObje);
// ! ---------------------------------------------
// console.log("hasOwnProperty:",newObje.hasOwnProperty("name")); // Propery'nin var olup olmadığını kontrol eder.
// ! ---------------------------------------------
// console.log("propertyIsEnumerable:",newObje.propertyIsEnumerable("name")); // Property enum olup olmadığını kontrol eder.
// ! ---------------------------------------------
// console.log("toLocaleString:",newObje.toLocaleString()); // Dile göre string'e dönüştürür.
// ! ---------------------------------------------
// const vvv = JSON.stringify(newObje); 
// console.log("stringify:",vvv); // Veriyi okunabilir stringe cevirir.
// ! ---------------------------------------------
// console.log("valueOf:",newObje.valueOf()); // Objeyi instance'dan cıkartır.
// ! ---------------------------------------------
// console.log("assign:",Object.assign({},obje01, obje03)); // Propertileri birleştirir, aynı isimde property varsa üstüne yazar.
// ! ---------------------------------------------
// console.log("assign:",Object.create({id:5,name:"Erdinç"})); // Proto eklemesi yapar.
// ! ---------------------------------------------
// console.log("defineProperties:",Object.defineProperties(obje01,{property01: { value: "55", writable: true}})); // Kurallı property ekleme.
// ! ---------------------------------------------
// console.log("defineProperty:",Object.defineProperty(obje01, "language", { value: "TR", configurable: true })); // Kurallı tek property ekleme.
// ! ---------------------------------------------
// console.log("entries:",Object.entries(obje01)); // Dizin halinde düzenli parçalar.
// ! ---------------------------------------------
// let x = Object.entries(obje01);
// let b = Object.freeze(obje01);
// b.name = "xxxxxxxx";
// console.log("freeze:",b); // Değiştirilemez obje yapar.
// ! ---------------------------------------------
// const x = new Map();
// x.set("id",1);
// x.set("name","Erdinç");
// x.set("surname","Cürebal");
// console.log(x.values());
// console.log("fromEntries:",Object.fromEntries(x)); // Map tipini objeye cevirir.
// ! ---------------------------------------------
// console.log("getOwnPropertyDescriptor:",Object.getOwnPropertyDescriptor(obje01,"name")); // Objenin içersindeki property 'nin kurallarını verir.
// ! ---------------------------------------------
// console.log("getOwnProsspertyDescriptors:",Object.getOwnPropertyDescriptors(obje01)); // Objenin içersindeki propertylerin hepsinin kurallarını yazdırır.
// ! ---------------------------------------------
// console.log("getOwnProsspertyDescriptors:",Object.getOwnPropertyDescriptors(obje01)); // Objenin içersindeki propertylerin hepsinin kurallarını yazdırır.
// ! ---------------------------------------------
// console.log("getOwnPropertyNames:",Object.getOwnPropertyNames(obje01)); // Propertyleri dizin halinde alır.
// ! ---------------------------------------------
// console.log("getOwnPropertyNames:",Object.getOwnPropertyNames(obje01)); // Propertyleri isimlerini dizin halinde alır.
// ! ---------------------------------------------
// console.log("getOwnPropertySymbols:",Object.getOwnPropertySymbols(obje01)); // Propertyleri sembollerini dizin halinde alır.
// ! ---------------------------------------------
// let proto = {id:01};
// let obj = Object.create(proto);
// console.log("getPrototypeOf:",Object.getPrototypeOf(obj)); // Objenin içerisinden prototype cıkartır.
// ! ---------------------------------------------
// const x = {id: 1, name: "Erdinç"};
// const y = {id: 1, name:  "Erdinç"};
// console.log("is:",Object.is(y,y)); // Tipinin eşitliği değil veya değerlerin eşitliği değil iki objeninde aynı yerden çıkmış olması gerekmektedir.
// ! ---------------------------------------------
// console.log("isExtensible:",Object.isExtensible(obje01)); // Dışardan özellik almış mı almışsa false döner.
// ! ---------------------------------------------
// console.log("isFrozen:",Object.isFrozen(obje01)); // Obje dondurulmuşmu bakılır.
// ! ---------------------------------------------
// console.log("isSealed:",Object.isSealed(obje01)); // Seal özelliğini kontrol eder.
// ! ---------------------------------------------
// console.log("keys:",Object.keys(obje01)); // Keyleri dizin halinde yazdırır.
// ! ---------------------------------------------
// console.log("preventExtensions:",Object.preventExtensions(obje01)); // Yeni gelen özellikleri engeller.
// ! ---------------------------------------------
// console.log("seal:",Object.seal(obje01)); // Seal özelliği eklendikten sonra bir veri silinirse ve silinmeden önce bir veri eklendiyse sealdan sonraki aldığı değeri gösterir ve veri silinmez.
// ! ---------------------------------------------
// let Animal = {
//     makeSound() {
//       console.log(`${this.name}, ${this.sound}!`);
//     },
//   };
//   function Dog(name) {
//     this.name = name;
//     this.sound = "bark";

//     Object.setPrototypeOf(this, Animal);
//   }

//   dog1 = new Dog("Marcus");

//   dog1.makeSound(); // Prototype set eder ve değiştirir.
// ! ---------------------------------------------
// console.log("values:",Object.values(obje01)); // Objenin içerindeki valueri veya değerleri dizin halinde yazdırır.


// TODO Fonksiyonlar
// function Foo() {
//     console.log(Foo.caller.name);
// }

// function Bar() {
//     Foo();
// }

// Bar();
// ! ---------------------------------------------
// document.getElementById("myFormSubmit").onclick = myForm;

// function myForm(){
//     const form = document.forms["myForm"]["username"].validity.valid;
//     console.log(form);
// }
// ! ---------------------------------------------
// function myFunction(){
//     var args = Array.from(arguments);

//     args.forEach(function (el) {
//         console.log(el);
//     });
// }

// myFunction("merhaba","selam");
// ! ---------------------------------------------
// var objeFunc = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

// var person1 = {
//     firstName: "John",
//     lastName: "Doe"
// };

// var person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// };
// objeFunc.fullName.call(person1);
// ! ---------------------------------------------
// var myFunObje = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// };
// var person1 = {
//     firstName: "John",
//     lastName: "Doe"
// };
// myFunObje.fullName.call(person1, "Oslo", "Norway");
// ! ---------------------------------------------
// var person = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// };
// var person1 = {
//     firstName: "John",
//     lastName: "Doe"
// };
// person.fullName.apply(person1, ["Oslo", "Norway"]);

// ! ---------------------------------------------
// function myFunc(a,b,c){

//     c("Hata");
//     return a+b;
// };

// console.log(myFunc(5,6, (message) => {
//     throw "Bu olmadı";
// }));



// TODO Classes
// class TestClass{
//     constructor(name,surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     yazdir(){
//         return this.name + " " + this.surname + " " + this.age;
//     }

//     static staticWrite(a,b){
//         return a+b;
//     }

//     static set setiti(x){
//         this.age = x;
//     }

//     static get getWrite(){
//         return this.age;
//     }
// }

// TestClass.setiti = 15;
// console.log(TestClass.getWrite);

// const testClass = new TestClass("Erdinç", "Cürebal");
// console.log(testClass.yazdir());

// const testClass01 = new TestClass("Nurcan", "Cürebal");
// console.log(testClass01.yazdir());

// console.log(TestClass.staticWrite(5,6));


// TODO Egzersizlerimiz
// window.addEventListener("scroll", () => {
//     let newScroolY01 = (window.scrollY + 100).toString(16);
//     let newScroolY02 = "#"+newScroolY01 + newScroolY01;
//     document.body.style.transition = "all ease 1s";
//     document.body.style.backgroundColor = newScroolY02;
//     if (window.scrollY < 100) document.body.style.backgroundColor = "white";
//     document.getElementById("divTest01").style.width = window.scrollY+"px";
//     document.getElementById("divTest01").style.height = window.scrollY+"px";
//     if (window.scrollY > 1520) {
//         document.getElementById("divTest02").style.width = ( window.scrollY - 1520)+"px";
//         document.getElementById("divTest02").style.height = (window.scrollY - 1520)+"px";
//     }
//     if (window.scrollY < 1520) document.getElementById("divTest02").style.width = 0+"px";
// });
// ! ---------------------------------------------
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return "I have a " + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ", it is a " + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");


// TODO DOM
// document.body.onload = onload;
// function onload() {
//     console.log("Sayfa yüklendikten sonra javascript uygulandı.");
// }
// ! ---------------------------------------------
// console.log(document.baseURI); // Sunucu url geri döner.
// console.log(document.body); // Body'inin içini döner.
// console.log(document.doctype); // Html versionunu verir.
// console.log(document.documentElement); // Html'inin içini döner.
// console.log(document.documentURI); // Bulunduğunuz url geri döner.
// console.log(document.domain); // Domaini geri döner.
// console.log(document.head); // Head'inin içini döner.
// console.log(document.readyState); // Sayfanın loading olduğunu verir.
// console.log(document.scripts); // Js hakkında detaylı bilgi verir.
// console.log(document.title); // Sayfa başlığını döner.
// console.log(document.URL); // Bütün url verir.
// !---------------------------------------------------
// function deneme() {
//     const x=document.activeElement.tagName;
//     console.log(x);}; //aktif olan tagı gösterir
// !-------------------------------------------------
// document.addEventListener("click",function() {
//     document.body.style.background="red";
// }); //herhangi bir etkinlik eklenebilir
// !-------------------------------------------------------
// console.log(document.adoptNode());//iframede ki başllıkları çeker
// !-------------------------------------------------------
// console.log(document.characterSet);// belgenin hangi kod diliyle yazıldığını gösterir.
// !-------------------------------------------------------
// let x = document.getElementsByTagName("h1")[0].innerHTML;
// console.log(x);
// !-------------------------------------------------------
// document.getElementsByTagName("h1")[0].attributes.class.value = "red";
// document.getElementById("prag").attributes.class.value = "red";
// !-------------------------------------------------------
// document.getElementById("prag").style.color = "red";
// !-------------------------------------------------------
// document.getElementById("prag").setAttribute("class","red");
// !-------------------------------------------------------
// let title = document.createElement("h1");
// title.innerText = "Javascript DOM Practice";
// document.body.appendChild(title);

// let prag01 = document.createElement("p");
// prag01.innerText = "Adipisicing elit. A, minus.";
// document.body.appendChild(prag01);

// let prag02 = document.createElement("p");
// prag02.innerText = "Amet consectetur adipisicing elit.";
// document.body.replaceChild(prag02
//     ,prag01);

// let prag03 = document.createElement("p");
// prag03.innerText = "Lorem ipsum dolor sit.";
// document.body.appendChild(prag03);
// document.body.removeChild(prag03);

// document.write("<h3>Testing</h3>");
// !-------------------------------------------------------
// let baslik = document.createElement("h1");
// baslik.innerText = "Merhaba Dünya!!!";
// document.body.appendChild(baslik);
// baslik.onclick = () => console.log("naber");
// !-------------------------------------------------------
// const title = document.createElement("h2");
// title.innerText = "Hello World!!!";
// title.setAttribute("id","testigi");
// document.body.appendChild(title);
// const queryTest = document.body.querySelector("#testigi");
// queryTest.style.color = "red";
// !-------------------------------------------------------
// const prag01 = document.createElement("p");
// const prag02 = document.createElement("p");
// prag01.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
// prag02.innerText = "Eveniet, earum? Voluptatibus a harum quos assumenda corrupti ipsa sed nostrum suscipit!";

// document.body.appendChild(prag01);
// document.body.appendChild(prag02);

// const x = document.body.querySelectorAll("p")[0];
// const y = document.body.querySelectorAll("p")[1];
// x.innerText = y.outerText;

// for(let i = 0; i < 5; i++) document.write(y.outerText+ "<br>");
// !-------------------------------------------------------
// document.write("<button id=\"mySend\">SEND</button>");
// document.write("<button id=\"myStop\">RESET</button>");
// const mySend = document.querySelector("#mySend");
// const myStop = document.querySelector("#myStop");

// mySend.addEventListener("click", myWrite);
// myStop.addEventListener("click", () => {
//     mySend.removeEventListener("click", myWrite);
// });

// function myWrite () {
//     console.log("CLICK");
// }

// TODO Console 
// var myObj = { firstname : "John", lastname : "Doe" };
// console.assert(document.getElementById("demo"), myObj); // Html elementi kontrol eder ve eğer yoksa girilen ikinci parametredeki hatayı döner.
// !-------------------------------------------------------
// console.clear(); // Console ekranını temizler.
// !-------------------------------------------------------
// for (i = 0; i < 10; i++) {
//     console.count(); // Bu komut girildikce console da sayı sayar.
// }
// !-------------------------------------------------------
// let x = "Lorem ipsun";
// console.error("ERROR: ", x);
// !-------------------------------------------------------
// console.log("Hello world!");
// console.group(); // Logları gruplandırır.
// console.log("Hello again, this time inside a group!");
// console.log("Hello again, this time inside a group!");
// !-------------------------------------------------------
// console.log("Hello world!");
// console.groupCollapsed(); // Başlangıç.
// console.log("Hello again, this time inside a collapsed group!");
// console.groupEnd(); // Bitiş, Logları veya hataları gruplandırır. başlangıç ve bitişi vardır.
// !-------------------------------------------------------
// console.info("Hello world!"); // Bilgi verme amacı ile kullanılır.
// !-------------------------------------------------------
// console.log("Hello world!"); // Log kayıtlarını yazdırmak için kullanılır. işlem kayıtı.
// !-------------------------------------------------------
// console.table(["Audi", "Volvo", "Ford"]); // Console ekranında tablo yapar.
// !-------------------------------------------------------
// console.time(); // Console ekranını başlama zamanı.
// for (i = 0; i < 100000; i++) {
// }
// console.timeEnd(); // Console ekranının bitiş zamanı.
// !-------------------------------------------------------
// function myFunction() {
//     myOtherFunction();
// }

// function myOtherFunction() {
//     console.trace("adas"); // Çalışan fonksiyonu yakalar.
// }

// myFunction();
// !-------------------------------------------------------
// console.warn("WARN:", "Bu bir uyarıdır."); // Uyarı atmak için kullanılır.


// TODO Navigation
// const x = navigator.geolocation;
// x.getCurrentPosition(position => {
//     console.log("latitude:",position.coords.latitude);
//     console.log("longitude:",position.coords.longitude);
//     console.log("altitude:",position.coords.altitude);
//     console.log("accuracy:",position.coords.accuracy);
//     console.log("altitudeAccuracy:",position.coords.altitudeAccuracy);
//     console.log("heading:",position.coords.heading);
//     console.log("speed:",position.coords.speed);
// }); // Mevcut konum hakkında bilgiler alır.


// TODO History
// history.back(); // Mevcut bulunan sayfada bir önceki sayfaya geçiş yapar.
// !-------------------------------------------------------
// history.forward(); // Back tam tersi işlemini yapar, geçmişe girilmiş sayfada ileri gider.
// !-------------------------------------------------------
// history.go(); // Negatif veya Pozitif parametre almaktadır, geri veya ileri gider.
// !-------------------------------------------------------
// console.log(history.length); // History geçmişine bakar.


// TODO Storage - Cookie
// var x = localStorage.key(0); // LocalStorage'de index bağlı cekme işlemi yapar.
// console.log(x); 
// !-------------------------------------------------------
// sessionStorage.key(0); // SessionStorage'de index bağlı cekme işlemi yapar.
// console.log(x); 
// !-------------------------------------------------------
// var x = localStorage.length; // LocalStorage kaç verinin olup olmadığına bakar.
// console.log(x); 
// !-------------------------------------------------------
// var x = sessionStorage.length; // LocalStorage kaç verinin olup olmadığına bakar.
// console.log(x); 
// !-------------------------------------------------------
// var x = localStorage.getItem("name");
// console.log(x); 
// !-------------------------------------------------------
// var x = sessionStorage.getItem("name");
// console.log(x); 
// !-------------------------------------------------------
// const b = {id: 1, name: "Erdinç", surname: "Cürebal"}; // Verimiz.
// const x = localStorage.setItem("account", JSON.stringify(b)); // ls Yüklüyoruz.
// const y = localStorage.getItem("account"); // ls'den cekiyoruz.
// console.log(JSON.parse(y)); // parse edip console yazdırıyoruz.
// !-------------------------------------------------------
// const b = {id: 1, name: "Erdinç", surname: "Cürebal"}; // Verimiz.
// const x = sessionStorage.setItem("account", JSON.stringify(b)); // ss Yüklüyoruz.
// const y = sessionStorage.getItem("account"); // ss'den cekiyoruz.
// console.log(JSON.parse(y)); // parse edip console yazdırıyoruz.
// !-------------------------------------------------------
// localStorage.removeItem("veriIsmi"); // İsme bağlı veri silme.
// !-------------------------------------------------------
// sessionStorage.removeItem("veriIsmi"); // İsme bağlı veri silme.
// !-------------------------------------------------------
// localStorage.clear(); // LocalStorage'deki bütün verileri siler.
// !-------------------------------------------------------
// sessionStorage.clear(); // SessionStorage'deki bütün verileri siler.