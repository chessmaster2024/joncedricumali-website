function changeImage() {
    var image = document.getElementById("naruto-image");
    if (image.src.includes("naruto.jpg")) {
        image.src = "naruto2.jpg";
    } else {
        image.src = "naruto.jpg";
    }
}

function changeText() {
    var text = document.getElementById("naruto-info");
    if (text.textContent.includes("main protagonist")) {
        text.textContent = "Naruto Uzumaki is a young ninja from the Hidden Leaf Village.";
    } else {
        text.textContent = "Naruto Uzumaki is the main protagonist of the Naruto series.";
    }
}

function changeColor() {
    var container = document.querySelector(".container");
    if (container.style.backgroundColor === "rgb(255, 255, 255)") {
        container.style.backgroundColor = "#ffffcc";
    } else {
        container.style.backgroundColor = "#fff";
    }
}