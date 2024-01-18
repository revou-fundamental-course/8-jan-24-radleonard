const inputField = document.getElementById("squareSide")
const countButton = document.getElementById("countButton")

inputField.addEventListener('input',function() {
    const inputValue = inputField.value.trim()
    if (validateInput(inputValue)) {
        countButton.disabled = false
    } else {
        countButton.disabled = true
        
    }
})
// ini event listener ngedengerin saat ada event, diatas
// contoh kalau ngetik

function validateInput(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}