var character = document.getElementById("charecter");
function moveleft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 2 + "px";
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.right = right - 2 + "px";
}
document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft")
}
