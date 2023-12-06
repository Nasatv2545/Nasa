


let clickMhServer = document.querySelector(".server-web .container .click-server .mh-serv .text .click");
let clickKingServer = document.querySelector(".server-web .container .click-server .King-serv .text .click");
let iconList = document.querySelector("header .container .icon .fa-list ")
let listUl = document.querySelector("header nav ul");
console.log(listUl)


let webMhServer = document.querySelector(".server-web .container .click-server .mh-serv .mh-server");
let webKingServer = document.querySelector(".server-web .container .click-server .King-serv .king-server");
iconList.addEventListener("click" , ()=> {
    listUl.classList.toggle("opacity")
})

clickMhServer.addEventListener("click" , ()=> {
webMhServer.classList.toggle("active")


});
clickKingServer.addEventListener("click" , ()=> {
    webKingServer.classList.toggle("active")
    
    
});


