const buttonCalculate = document.querySelector('.btn-calc');
// const buttonCopy = document.querySelector('.btn-copy');
const outResult = document.querySelector('.out-result');
const inputNumber = document.querySelector('.enter-num');
const inSize = document.querySelector('.select-size');
const outSize = document.querySelector('.select-size2');

buttonCalculate.onclick = function () {
    let result = fromMeter(toMeter(inputNumber.value, inSize.value), outSize.value);
    outResult.innerHTML = result;
}

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
