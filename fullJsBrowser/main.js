"use strict";
// ! ANA AYARLAR - BASLANGIC
document.title = "Full Javascript Page";
document.documentElement.style.scrollBehavior = "smooth";
// ! ANA AYARLAR - BITIS

// ! NAV - BASLANGIC
// ? Nav
const nav = document.createElement("nav");
nav.style.backgroundColor = "#2fa1ad";
nav.style.display = "inline-block";
nav.style.width = "100%";
nav.style.position = "sticky";
nav.style.transition = "all ease 1s";
nav.style.top = "0";

document.body.appendChild(nav);

// ? Baslik
const baslik = document.createElement("h1");
baslik.innerText = "Full Javascript Page";
baslik.style.color = "white";
baslik.style.padding = "5px";
baslik.style.display = "inline-block";
nav.appendChild(baslik);

// ? Menu
const menu = document.createElement("ul");
const menuList = [
    { name: "AnaSayfa", url: "#top", target: "_top" },
    { name: "Hakkımızda", url: "#hakkimizda", target: "_self" },
    { name: "Discord", url: "https://discord.gg/2reBdbn", target: "_blank" },
];
menuList.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = item.name;
    a.setAttribute("href", item.url);
    a.setAttribute("target", item.target);
    li.appendChild(a);
    menu.appendChild(li);
});


nav.appendChild(menu);

const menuLink = document.querySelectorAll("nav>ul>li>a");

const menuUl = document.querySelector("nav>ul");
menu.style.display = "inline";
menu.style.float = "right";

const menuLi = document.querySelectorAll("nav>ul>li");

menuLi.forEach(item => {
    item.style.listStyleType = "none";
    item.style.display = "inline";
});

menuLink.forEach(item => {
    item.style.color = "white";
    item.style.listStyleType = "none";
    item.style.textDecoration = "none";
    item.style.margin = "10px";
    item.style.display = "inline-block";
});
// ! NAV - BITIS

// ! AnaSayfa Section - BASLANGIC
const home = document.createElement("section");
home.style.paddingTop = "20px";
const homeHeader = document.createElement("h2");
homeHeader.innerText = "AnaSayfa";
home.appendChild(homeHeader);

const homeParagraf01 = document.createElement("p");
homeParagraf01.innerText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.";
home.appendChild(homeParagraf01);

const homeParagraf02 = document.createElement("p");
homeParagraf02.innerText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.";
home.appendChild(homeParagraf02);

home.style.height = "100vh";
document.body.appendChild(home);
// ! AnaSayfa Section - BITIS

// ! AnaSayfa Section - BASLANGIC
const about = document.createElement("section");
about.setAttribute("id", "hakkimizda");
about.style.paddingTop = "50px";
const aboutHeader = document.createElement("h2");
aboutHeader.innerText = "Hakkımızda";
about.appendChild(aboutHeader);

const aboutParagraf01 = document.createElement("p");
aboutParagraf01.innerText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.";
about.appendChild(aboutParagraf01);

about.style.height = "100vh";
document.body.appendChild(about);
// ! Hakkimizda Section - BITIS

// ! Footer - BASLANGIC
const footer = document.createElement("footer");
footer.innerText = "Tüm haklarımız saklıdır.";
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.style.color = "white";
footer.style.backgroundColor = "#2fa1ad";
document.body.appendChild(footer);
// ! Footer - BITIS



window.addEventListener("scroll", () => {
    console.log();
    if (window.scrollY < 100) {
        nav.style.backgroundColor = "#2fa1ad";
    } else {
        nav.style.backgroundColor = "#3c8f8b";
    }
});