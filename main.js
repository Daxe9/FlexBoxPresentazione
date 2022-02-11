let isFlex = false;
let isGrowing = false;
document.getElementById("btn1").addEventListener("click", () => {
    if (!isFlex) {
        document.querySelector(".flex-container-fake").style.display = "flex";

        document.getElementById("code-flex").innerHTML = "flex";
        document.getElementById("code-flex").style.color = "green";

        isFlex = true;
    } else {
        document.querySelector(".flex-container-fake").style.display = "block";
        document.getElementById("code-flex").innerHTML = "block";
        document.getElementById("code-flex").style.color = "red";
        isFlex = false;
    }
});

document.getElementById("btn2").addEventListener("click", () => {
    let element = document.querySelector(".flexbox-direction");
    let { value } = document.getElementById("direction");
    let text = document.getElementById("code-direction");
    if (value === "row") {
        element.style.flexDirection = "row";
        text.innerText = "row";
    } else if (value === "row-reverse") {
        element.style.flexDirection = "row-reverse";
        text.innerText = "row-reverse";
    } else if (value === "column") {
        element.style.flexDirection = "column";
        text.innerText = "column";
    } else if (value === "column-reverse") {
        element.style.flexDirection = "column-reverse";
        text.innerText = "column-reverse";
    }
});

document.getElementById("btn3").addEventListener("click", () => {
    let element = document.querySelector(".flexbox-wrap");
    let { value } = document.getElementById("wrap");
    let text = document.getElementById("code-wrap");
    if (value === "wrap") {
        element.style.flexWrap = "wrap";
        text.innerText = "wrap";
    } else if (value === "wrap-reverse") {
        element.style.flexWrap = "wrap-reverse";
        text.innerText = "wrap-reverse";
    } else if (value === "nowrap") {
        element.style.flexWrap = "nowrap";
        text.innerText = "nowrap";
    }
});

document.getElementById("btn4").addEventListener("click", () => {
    let element = document.querySelector(".flexbox-content");
    let { value } = document.getElementById("content");
    let text = document.getElementById("code-content");
    if (value === "flex-start") {
        element.style.justifyContent = "flex-start";
        text.innerText = "flex-start";
    } else if (value === "flex-end") {
        element.style.justifyContent = "flex-end";
        text.innerText = "flex-end";
    } else if (value === "center") {
        element.style.justifyContent = "center";
        text.innerText = "center";
    } else if (value === "space-between") {
        element.style.justifyContent = "space-between";
        text.innerText = "space-between";
    } else if (value === "space-around") {
        element.style.justifyContent = "space-around";
        text.innerText = "space-around";
    }
});

document.getElementById("btn5").addEventListener("click", () => {
    let { children } = document.querySelector(".flexbox-grow");
    let text = document.getElementById("code-grow");
    if (!isGrowing) {
        for (let i = 0; i < children.length; ++i) {
            children[i].style.flexGrow = 1;
        }
        text.innerText = 1;
        isGrowing = true;
    } else {
        for (let i = 0; i < children.length; ++i) {
            children[i].style.flexGrow = 0;
        }
        text.innerText = 0 + "(default)";
        isGrowing = false;
    }
});
