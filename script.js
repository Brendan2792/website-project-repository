const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);
let list = document.getElementById("list");
list.addEventListener("mouseover", function(e) {
    e.target.style.color = "lightGreen";
    setTimeout(function() {
        e.target.style.color = "";
    }, 500);
}, false);