var btnChangeMode = document.querySelector("#changeMode");
var stylePage = document.getElementsByTagName("title");
var bodyHTML = document.querySelector("body");
var pHtml = document.querySelector("p");
var navHtml = document.querySelector("nav");
var ulHtml = document.querySelector("ul");
var liHtml = document.querySelector("li");
var hrHtml = document.querySelector("hr");
var spanHtml = document.querySelector("span");
var blockquote = document.querySelector("#blockquote");
var isWhite = true;

btnChangeMode.addEventListener("click", onBtnClicked);


function onBtnClicked() {
    if (isWhite) {
        this.classList.add("black");
        btnChangeMode.textContent="White Mode";
         bodyHTML.classList.add("black");
        pHtml.classList.add("black");
        navHtml.classList.add("black");
        ulHtml.classList.add("black");
        liHtml.classList.add("black");
        hrHtml.classList.add("black");
        spanHtml.classList.add("black");
        blockquote.classList.add("black");
    
        isWhite = false;
    } else {
        this.classList.remove("black");
        btnChangeMode.textContent = "Black Mode";

        isWhite = true;
        bodyHTML.classList.remove("black");
        pHtml.classList.remove("black");
        navHtml.classList.remove("black");
        ulHtml.classList.remove("black");
        liHtml.classList.remove("black");
        hrHtml.classList.remove("black");
        spanHtml.classList.remove("black");
        blockquote.classList.remove("black");

    }
}