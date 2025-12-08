document.getElementById("info-btn").addEventListener("click", () => {
    alert("hehe caught you (¬‿¬)");
});

const nameText = document.getElementById("name");

nameText.addEventListener("mouseover", () => {
    nameText.style.transform = "scale(1.2)";
});

nameText.addEventListener("mouseout", () => {
    nameText.style.transform = "scale(1)";
});
