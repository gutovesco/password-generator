const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRangr.addEventListener('input', syncCharacterAmount)
const form = document.getElementById('passwordGeneratorForm')
form.addEventListener('submit', e => {
    e.preventDefault()
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}