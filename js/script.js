const outResult = document.querySelector('.out-result');
const inputNumber = document.querySelector('.enter-num');
const inSize = document.querySelector('.select-size');
const outSize = document.querySelector('.select-size2');
const btnCopy = document.querySelector('.btn-copy');
const btnCalculate = document.querySelector('.btn-calc');

function toMeter(numberIn, nameOfSizeIn) {
    switch (nameOfSizeIn) {
        case 'MILE':
            return numberIn * 1609.34;
        case 'KILOMETER':
            return numberIn * 1000;
        case 'CENTIMETER':
            return numberIn * 0.01;
        case 'MILIMETER':
            return numberIn * 0.001;
        case 'METER':
            return numberIn;
        default:
            break;
    }
}

function fromMeter(result, nameOfSizeOut) {
    switch (nameOfSizeOut) {
        case 'MILE':
            return result * 0.000621371;
        case 'KILOMETER':
            return result * 0.001;
        case 'CENTIMETER':
            return result * 100;
        case 'MILIMETER':
            return result * 1000;
        case 'METER':
            return result;
        default:
            break;
    }
}

btnCalculate.addEventListener("click", () => {
    outResult.innerHTML = fromMeter(toMeter(inputNumber.value, inSize.value), outSize.value);
});

btnCopy.addEventListener("click", () => {
    outResult.select();
    document.execCommand("copy");
});

close_img.addEventListener("click", () => {
    location.reload();
});