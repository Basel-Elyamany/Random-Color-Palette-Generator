let colors = document.querySelectorAll(".color"),
    colorCode = document.querySelectorAll(".hex-value"),
    generateBtn = document.getElementById("generate-btn"),
    copyBtns = document.querySelectorAll(".copy-btn"),
    deleteBtns = document.querySelectorAll(".fa-circle-xmark"),
    addColorBtn = document.querySelector(".add-color-btn");

/*------------------------------<Function Declaration>------------------------------*/
function generateRandomColors() {
    colors = document.querySelectorAll(".color");

    colorCode = document.querySelectorAll(".hex-value");

    colors.forEach((e, i) => {
        let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

        e.style.backgroundColor = randomColor;

        colorCode[i].innerText = randomColor.toUpperCase();

        activateCopyBtn(i);
    });
}

function activateCopyBtn(i) {
    copyBtns[i].onclick = () => navigator.clipboard.writeText(colorCode[i].innerText);
}

function activateDeleteBtn() {
    deleteBtns.forEach((e, i) => deleteBtns[i].onclick = () => e.parentElement.remove());
}

function addNewColor() {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`,

        newColorBox = document.createElement("div");

    newColorBox.classList.add("color-box");

    newColorBox.innerHTML = `<i class="fa-regular fa-circle-xmark"></i><div class="color" style="background-color: ${randomColor}"></div><div class="color-info"><span class="hex-value">${randomColor.toUpperCase()}</span><i class="far fa-copy copy-btn" title="Copy to clipboard"></i></div>`;

    addColorBtn.before(newColorBox);
}

/*------------------------------<Init>------------------------------*/
generateRandomColors();

generateBtn.onclick = generateRandomColors;

activateDeleteBtn();

addColorBtn.onclick = () => {
    addNewColor();

    deleteBtns = document.querySelectorAll(".fa-circle-xmark");

    deleteBtns[deleteBtns.length - 1].onclick = (e) => e.target.parentElement.remove();

    copyBtns = document.querySelectorAll(".copy-btn");

    colorCode = document.querySelectorAll(".hex-value");
    
    copyBtns[copyBtns.length - 1].onclick = (e) => navigator.clipboard.writeText(e.target.previousElementSibling.innerText,);
};
