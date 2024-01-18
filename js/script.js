document.addEventListener("DOMContentLoaded", function () {
    const submitFormArea = document.getElementById("calculateArea");

    const resetButton = document.getElementById("resetButton");

    submitFormArea.addEventListener("submit", function (event) {
        event.preventDefault();
        hitungLuas();
    });

    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        resetFormLuas();
    });


});

const containerArea = document.getElementById("resultCalculateArea");


function hitungLuas() {
    containerArea.innerHTML = "";

    let panjangSisi = parseFloat(document.getElementById("squareSide").value);

    let luas = panjangSisi * panjangSisi;

    heading = document.createElement("h4");
    heading.innerHTML = "Hasil";

    info = document.createElement("input");
    info.value = `L = ${panjangSisi} x ${panjangSisi}`;
    info.setAttribute("readonly", "true");

    result = document.createElement("input");
    result.value = `L = ${luas}`;
    result.setAttribute("readonly", "true");

    desc = document.createElement("p");
    desc.innerText = `Maka Luas dari persegi tersebut ${luas}`;

    containerArea.append(heading, info, result, desc);
}

function resetFormLuas() {
    document.getElementById("squareSide").value = "";

    containerArea.innerHTML = "";
}

